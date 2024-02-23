import React from "react";
import { Footer, Navbar } from "../../Components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../States/adminSlice";
import "./Admin.css";

const Admin = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
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
  const [notification, setNotification] = useState(false);
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
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
    dispatch(createUser(formData));
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className="admin">
        <p className="adminPanel">Admin Panel</p>
        <p className={notification ? "show" : "hide"}>
          Product Added Successfully
        </p>
        <form className="forms" onSubmit={(e) => handleSubmit(e)}>
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
          </span>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Admin;
