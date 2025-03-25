import { useState } from "react";
import ProductSelection from "./components/ProductSelection";
import ProblemSelection from "./components/ProblemSelection";
import { serviceData } from "./data/serviceData";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const resetAll = () => setSelectedProduct(null);

  const problems = selectedProduct ? serviceData[selectedProduct] : null;

  return (
    <div>
      {!selectedProduct ? (
        <ProductSelection onSelect={setSelectedProduct} />
      ) : (
        <ProblemSelection
          product={selectedProduct}
          problems={problems}
          onBack={resetAll}
        />
      )}
    </div>
  );
}

export default App;