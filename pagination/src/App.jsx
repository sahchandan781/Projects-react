import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const ProductCard = ({ image, title, price }) => {
  return (
    <div class="product-card">
      <img className="p-img" src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};

const page_size = 10;
function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentpage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=50");
    const json = await data.json();
    setProducts(json.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPage = Math.ceil(totalProducts / page_size);
  const start = currentPage * page_size;
  const end = start + page_size;

  const handlePageChange = (n) => {
    setCurrentpage(n);
  }
  const gotoPrevPage = () => {
    if(currentPage === 0) {
      return;
    }
    setCurrentpage(prev => prev -1);
  }

  const gotoNextPage = () => {
    if(currentPage === noOfPage -1) {
      
      return;
    }
    setCurrentpage(prev => prev + 1);
  }
  console.log(currentPage);

  return !products.length ? (
    <h1>No Product Available</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <div className="pagination-container">
        <button onClick={() => gotoPrevPage()} className="page-number">◀️</button>
        {[...Array(noOfPage).keys()].map((n) => (
          <span key={n} onClick={() => handlePageChange(n)} className={"page-number "+ (n === currentPage ? "active": "")}>{n}</span>
        ))}
        <button onClick={() => gotoNextPage()} className="page-number">▶️</button>
      </div>
      <div className="product-container">
        {products.slice(start, end).map((p) => (
          <ProductCard
            className="card"
            key={p.id}
            price={p.price}
            image={p.thumbnail}
            title={p.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
