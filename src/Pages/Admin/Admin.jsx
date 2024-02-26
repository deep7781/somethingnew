import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateProduct } from "../../States/adminSlice";
import "./Admin.css";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../Components/Api";

const Admin = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.admin.getUserData);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    const fetchData = async () => {
      if (!products.length) {
        try {
          const products = await fetchProducts(dispatch);
          console.log(products);
        } catch (error) {
          console.error("Error in Products component:", error);
        }
      }
    };

    fetchData();
  }, [dispatch, products.length]);
  const [formData, setFormData] = useState({
    // id: product ? product.id : "",
    image: product ? product.image : "",
    category: product ? product.category : "",
    name: product ? product.name : "",
    artist: product ? product.artist : "",
    price: product ? product.price : "",
    description: product ? product.description : "",
    height: product ? product.height : "",
    width: product ? product.width : "",
    depth: product ? product.depth : "",
    quantity: 1,
  });
  const [notification, setNotification] = useState(false);
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // if (product) {
  //   setFormData({
  //     image: product.image,
  //     category: product.category,
  //     name: product.name,
  //     artist: product.artist,
  //     price: product.price,
  //     description: product.description,
  //     height: product.height,
  //     width: product.width,
  //     depth: product.depth,
  //     quantity: 1,
  //   });
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      // id: "",
      image: "",
      category: "",
      name: "",
      artist: "",
      price: "",
      description: "",
      height: "",
      width: "",
      depth: "",
      quantity: 1,
    });
    setNotification(!notification);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
    if (product) {
      dispatch(updateProduct({ data: formData, id: id }));
      navigate("/admin/addOrDelete");
    } else {
      dispatch(createUser(formData));
    }
  };
  return (
    <div>
      <p className="adminPanel">Admin Panel</p>
      {/* <Navbar /> */}
      <div className="admin">
        <p className={notification ? "show" : "hide"}>
          Product Added Successfully
        </p>
        <form className="forms" onSubmit={(e) => handleSubmit(e)}>
          {/* <div>
            <label htmlFor="id">Id</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
            />
          </div> */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="image">Image URL</label>
            <div className="inputB">
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="artist">Artist</label>
            <input
              type="text"
              name="artist"
              value={formData.artist}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="height">Height</label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="width">Width</label>
            <input
              type="text"
              name="width"
              value={formData.width}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="depth">Depth</label>
            <input
              type="text"
              name="depth"
              value={formData.depth}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              value="1"
              onChange={handleInputChange}
            />
          </div>
          <span className="adminSubmit">
            {/* <button type="submit">Submit</button> */}
            <button type="submit" class="cssbuttons-io-button">
              Submit
              <div class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"></path>
                </svg>
              </div>
            </button>
            <Link to="/admin/addOrDelete">
              <button class="cssbuttons-io-button">
                View Products
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </button>
            </Link>
          </span>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Admin;
