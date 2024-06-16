import React, { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      setProducts(res.data)
    } catch (error) {
      console.log("Error fetching products", error)
    }
  }

  const handleDelete = useCallback(async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`)
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      )
      alert("Product Deleted")
    } catch (error) {
      console.error("Error deleting product:", error)
    }
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>
                <Link to={`/products/${p.id}`}>{p.title}</Link>
              </td>
              <td>${p.price}</td>
              <td>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
