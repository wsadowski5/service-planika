import { useTranslation } from "react-i18next";

const ProductSelection = ({ productsByCategory, onSelect }) => {
  const { t } = useTranslation();

  return (
    <div className="my-8 flex items-center justify-center flex-col">
      <h4 className="text-3xl my-4 text-center">
        {t("select_product_prompt")}
      </h4>
      {Object.entries(productsByCategory).map(([category, list]) => {
        if (!list.length) return null;

        return (
          <div
            key={category}
            className="text-2xl my-4 flex items-start justify-center flex-col w-full"
          >
            <h4 className="my-6">{category}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {list.map((p) => (
                <div
                  key={p.title}
                  onClick={() => onSelect(p.title)}
                  className="text-2xl rounded-2xl border border-gray-400  py-4 cursor-pointer hover:bg-gray-100 hover:border-gray-600 duration-300 w-full flex items-center gap-4 px-4"
                >
                  {p.image && (
                    <img className="!h-24 w-auto" src={p.image} alt={p.title} />
                  )}
                  <div>
                    <p>{p.title}</p>
                    {p.subtitle && (
                      <p className="text-sm italic text-gray-500">{p.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSelection;
