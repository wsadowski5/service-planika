import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductSelection from "./ProductSelection";
import ProblemSelection from "./ProblemSelection";
import SolutionView from "./SolutionView";

const ServiceApp = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});




  // const currentLang = (document.documentElement.lang || "en").split("-")[0];
  const [currentLang, setCurrentLang] = useState(
    (document.documentElement.lang || "en").split("-")[0]
  );
  
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newLang = (document.documentElement.lang || "en").split("-")[0];
      setCurrentLang(newLang);
    });
  
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
  
    return () => observer.disconnect();
  }, []);


  const { product, problem } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://planikafires.com/wp-json/wp/v2/service_product?per_page=100"
        );
        const data = await res.json();
        setProducts(data);

        const categorized = {};

        data.forEach((post) => {
          const rawCat = post.acf?.category || "Other";
          const normalizedCat = formatCategory(rawCat);

          const entry = {
            title: post.title?.rendered,
            subtitle: post.acf?.subtitle,
            image: post.acf?.cat_img?.url || null,
          };

          if (!categorized[normalizedCat]) {
            categorized[normalizedCat] = [];
          }

          categorized[normalizedCat].push(entry);
        });

        const sortedCategorized = Object.keys(categorized)
          .sort((a, b) => a.localeCompare(b))
          .reduce((acc, key) => {
            acc[key] = categorized[key];
            return acc;
          }, {});

        setProductsByCategory(sortedCategorized);
      } catch (err) {
        console.error("Błąd podczas pobierania danych:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }, [location.pathname]);

  const formatCategory = (str) => {
    return str
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const selectedEntry = products.find(
    (p) => p.title.rendered.toLowerCase() === product?.toLowerCase()
  );


  const getServiceIssues = (acf, lang) => {
    if (!acf) return null;
  
    const main = acf[`service_issues_${lang}`];
    if (Array.isArray(main) && main.length > 0) {
      return main;
    }
  
    const en = acf.service_issues_en;
    if (Array.isArray(en) && en.length > 0) {
      return en;
    }
  
    const fallbackKey = Object.keys(acf).find(
      (key) => key.startsWith("service_issues_") && Array.isArray(acf[key]) && acf[key].length > 0
    );
  
    return fallbackKey ? acf[fallbackKey] : null;
  };
  
  const serviceIssues = getServiceIssues(selectedEntry?.acf, currentLang);



  const problems = Array.isArray(serviceIssues)
    ? serviceIssues.reduce((acc, issue) => {
        const raw = Array.isArray(issue.issue) ? issue.issue[0] : issue.issue;
        const key = raw?.name;

        if (!key) {
          console.warn("Brak klucza w issue", issue);
          return acc;
        }

        acc[raw?.name] = {
          code: raw?.code,
          name: raw?.name,
          solutions: issue.solution.map((r) => ({
            name: r.solution_name,
            content: r.solution_content,
            image: r.image?.url,
            video: r.video,
            file: r.file?.url,
            link: r.link,
          })),
        };

        return acc;
      }, {})
    : null;

  const solutions = problems?.[decodeURIComponent(problem)];

  let content;

  if (!product) {
    content = (
      <ProductSelection
        productsByCategory={productsByCategory}
        onSelect={(p) => navigate(`/${p}`)}
      />
    );
  } else if (!problem) {
    content = (
      <ProblemSelection
        product={product}
        problems={problems}
        onBack={() => navigate(`/`)}
        onSelect={(prob) => navigate(`/${product}/${encodeURIComponent(prob)}`)}
      />
    );
  } else {
    content = (
      <SolutionView
        product={product}
        problem={problem}
        solutions={solutions}
        onBack={() => navigate(`/${product}`)}
      />
    );
  }

  return (
    <div className="text-gray-800 sm:py-32 py-8">
      <div>
        <h3 className="text-3xl font-bold sm:mb-32 mb-8 text-center">
          {t("service_title")}
        </h3>
        {content}
      </div>
    </div>
  );
};

export default ServiceApp;
