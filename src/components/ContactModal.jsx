import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const formIds = {
    en: "619b74f0-6b84-411a-a3e0-9dcc6f8fae11",
    pl: "6c552c44-d2ad-47b1-92aa-1cb6d3b403e4",
    de: "cef69317-72a2-4ac4-b88f-cf9fd9e5d719",
    fr: "02b223ba-d521-47e6-88fc-f9cf7613aa61",
    es: "c26d7330-34e8-4b81-be82-ae7037562199",
    it: "d296ff36-983f-4327-8053-972272cf855c",
  };



const ContactModal = ({ onClose }) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language.s || "en";



  
  useEffect(() => {
    console.log('modal opens')
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "25625202",
          formId: formIds[currentLang] || formIds.en,
          region: "eu1",
          target: "#hubspot-form",
        });
      }
    };
    document.body.appendChild(script);
  }, [currentLang]);

  return (
    <div
      className="fixed inset-0 bg-gray-300/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full max-h-5/6 text-center relative mt-11 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-black cursor-pointer"
        >
          &times;
        </button>

        <h4 className="text-2xl font-bold mb-4">{t("contact_service")}</h4>
        <div id="hubspot-form" className="hbspt-form" />
      </div>
    </div>
  );
};

export default ContactModal;
