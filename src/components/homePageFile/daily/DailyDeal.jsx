import React, { useState, useEffect } from "react";
import DailyDealCard from "./DailyDealCard";
import axios from "../../../config/axios";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../../contexts/searchContext";
import { SellerProductContext } from "../../../contexts/sellerProductContext";

function DailyDeal({ sellerProduct, productCard }) {
  // const [productCard, setProductCard] = useState([]);
  // const { sellerProduct, setSellerProduct } = useContext(SellerProductContext);

  // console.log(productCard);
  // เปลี่ยนจาก productCard เป็น sellerProduct............************************************
  // useEffect(() => {
  //   const fetchProductCard = async () => {
  //     try {
  //       const res = await axios.get(`/products/allProduct`);
  //       // const res = await axios.get(`/products/allProduct/?isActive=true`);
  //       // const res = await axios.get(`/products/sold`);
  //       console.log(res.data);
  //       setProductCard(res.data.product);
  //       // setSellerProduct(res.data.product);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchProductCard();
  // }, []);
  //............................ รอทำ search
  const { searchText } = useContext(SearchContext);

  const filterProducts = productCard.filter((item) =>
    item.productName.toLowerCase().includes(searchText.toLowerCase())
  );
  //............................ รอทำ search
  return (
    <>
      <div className="bg-white mt-3 align-items-center container-ping ">
        <h3 className="navbar-brand fs-4 fw-bolder py-0 my-0 px-4 ">
          สินค้าทั้งหมด
        </h3>
      </div>
      <div className=" d-flex flex-wrap bg-white mt-2 align-items-center container ">
        {/* {productCard.map((item) => { */}
        {filterProducts.map((item) => {
          return (
            <DailyDealCard
              key={item.id}
              id={item.id}
              productName={item.productName}
              productPrice={item.price}
              productPic={item.productPicture}
            />
          );
        })}
      </div>
    </>
  );
}

export default DailyDeal;
