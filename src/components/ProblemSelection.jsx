import { useState } from "react";

const ProblemSelection = ({ product, problems, onBack }) => {
  const [expandedProblem, setExpandedProblem] = useState(null);
  const [clickedProblems, setClickedProblems] = useState([]);

  const toggleProblem = (problem) => {
    setExpandedProblem((prev) => (prev === problem ? null : problem));

    // Dodaj do listy klikniętych problemów, jeśli jeszcze go tam nie ma
    setClickedProblems((prev) =>
      prev.includes(problem) ? prev : [...prev, problem]
    );
  };

  const allClicked =
    Object.keys(problems).length > 0 &&
    clickedProblems.length === Object.keys(problems).length;

  return (
    <div>
      <h2>Wybrany produkt: {product}</h2>
      <button onClick={onBack}>Wróć do wyboru produktu</button>

      <ul>
        {Object.entries(problems).map(([problem, solutions]) => (
          <li key={problem} style={{ marginBottom: "15px" }}>
            <button onClick={() => toggleProblem(problem)}>{problem}</button>

            {expandedProblem === problem && (
              <ul style={{ marginTop: "10px" }}>
                {solutions.map((solution, index) => (
                  <li key={index} style={{ marginBottom: "10px" }}>
                    <p>{solution.text}</p>
                    {solution.image && (
                      <img
                        src={solution.image}
                        alt="Rozwiązanie"
                        style={{ maxWidth: "200px", display: "block" }}
                      />
                    )}
                    {solution.video && (
                      <iframe
                        width="300"
                        height="180"
                        src={solution.video}
                        title="Video"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* 👇 Przycisk tylko, gdy użytkownik kliknął każdy problem */}
      {allClicked && (
        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
            onClick={() => alert("Przekierowanie do kontaktu")}
          >
            Nie znalazłeś rozwiązania? Napisz do nas
          </button>
        </div>
      )}
    </div>
  );
};

export default ProblemSelection;
