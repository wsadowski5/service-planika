


const ProductSelection = ({ onSelect }) => {
    const products = {
      BEV: ["FLA", "Prime Fire", "Push Button"],
      GAZ: ["Gas Automatic", "Gas Manual", "Patio Heaters"],
      "Water Vapour": ["Cool Flame", "Cool Flame PRO"]
    };
  
    return (
      <div>
        {Object.entries(products).map(([category, productList]) => (
            
          <div key={category}>
           
            <h2>{category}</h2>
            <div style={{ marginBottom: "20px" }}>
              {productList.map((product) => (
                <button
                  key={product}
                  onClick={() => onSelect(product)}
                  style={{ marginRight: "10px", marginTop: "5px" }}
                >
                  {product}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductSelection;
  