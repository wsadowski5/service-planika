const SolutionView = ({ product, problem, solutions, onBack }) => {
    return (
      <div>
        <h2>{product} – {problem}</h2>
        <button onClick={onBack}>⬅️ Wróć do problemów</button>
        <ol>
          {solutions.map((sol, index) => (
            <li key={index}>{sol.text}</li>
          ))}
        </ol>
      </div>
    );
  };
  
  export default SolutionView;
  