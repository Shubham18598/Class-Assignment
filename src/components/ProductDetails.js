import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
      fetchProductById();
  }, [id]);

  const fetchProductById = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
        console.log(error)
    }
  };

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", height: "200px" }}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
