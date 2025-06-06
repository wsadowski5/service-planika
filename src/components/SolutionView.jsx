import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "./ContactModal";

const SolutionView = ({ product, problem, solutions, onBack }) => {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleToggle = (idx, sol) => {
    if (!sol.content) return;
    if (expandedIdx === idx) return;
    setExpandedIdx(idx);
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="sm:flex block items-baseline gap-4">
          <h3>{product}</h3>
          <p className="text-gray-500 text-2xl italic">{problem}</p>
        </div>

        <button onClick={onBack} className="text-sm cursor-pointer">
          {"<"} {t("change_problem")}
        </button>
      </div>

      <div className="space-y-4">
        {solutions?.solutions?.map((sol, idx) => (
          <div
            key={idx}
            onClick={() => handleToggle(idx, sol)}
            className={`border border-gray-300 rounded-2xl p-4 duration-300
            ${sol.content ? "hover:border-gray-700" : ""}
            ${
              sol.content && expandedIdx !== idx
                ? "cursor-pointer"
                : "cursor-auto"
            }`}
          >
            <p>{sol.name}</p>

            {expandedIdx === idx && (
              <div className="mt-6 flex flex-col gap-6">
                {sol.content && <p className="text-xl">{sol.content}</p>}
                {sol.image && (
                  <img src={sol.image} alt="" className="max-w-xs" />
                )}
                {sol.video && (
                  <iframe
                    src={sol.video}
                    width="300"
                    height="180"
                    allowFullScreen
                  />
                )}
                <div className="flex flex-col space-y-4">
                  {sol.file && (
                    <a
                      href={sol.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      {t("download_file")}
                    </a>
                  )}
                  {sol.link && (
                    <a
                      href={sol.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 underline text-2xl border-solid"
                    >
                      {t("buy_here")}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center gap-4 mt-8">
          <p className="text-xl">{t("still_need_help")}</p>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="text-xl bg-red-600 text-gray-200 border-1 py-2 px-6 cursor-pointer hover:bg-red-700 duration-300 rounded-xl"
          >
            {t("contact_service")}
          </button>
        </div>
      </div>

      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default SolutionView;
