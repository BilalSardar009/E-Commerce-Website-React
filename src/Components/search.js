
    
import React, { useContext,useState, useEffect } from "react";
import { db } from '../Config/Config';
import { Link } from 'react-router-dom'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import { Navbar } from './Navbar';

export const RetrieveData = ({ user }) => {
  const [product, setproduct] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredproduct, setFilteredproduct] = useState([]);
  const { dispatch } = useContext(CartContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("Products").orderBy("ProductName").get();
      setproduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredproduct(
      product.filter(
        (user) =>
          user.ProductName.toLowerCase().includes(search.toLowerCase()) 
      )
    );
  }, [search, product]);
  return (
    <>
    <Navbar user={user} />
      <div className="App">
        <h1>Product Details</h1>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div><Link to="/">Return to Home page</Link></div>
      <div>
        {filteredproduct.map((product) => [
          
          <div className='products-container'>
          <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Rs {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                    </div>
        ])}
      </div>
    </>
  );
}
export default RetrieveData;












