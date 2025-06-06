import { useTranslation } from "react-i18next";

const ProblemSelection = ({ product, problems, onBack, onSelect }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 my-6">
      <div>
        <h3 className="text-2xl">{product}</h3>
        <button onClick={onBack} className="text-sm cursor-pointer">
          {"<"} {t("change_product")}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {problems &&
          Object.entries(problems).map(([key, value]) => (
            <div
              key={key}
              onClick={() => onSelect(key)}
              className="flex items-center rounded-2xl border border-gray-400 p-4 cursor-pointer hover:bg-gray-100 hover:border-gray-600 duration-300 w-full"
            >
              <div>
                {value.code ? (
                  <>
                    <p>{value.code} </p>
                    <p className="text-gray-500 text-lg italic">{value.name}</p>
                  </>
                ) : (
                  <p>{value.name}</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProblemSelection;
