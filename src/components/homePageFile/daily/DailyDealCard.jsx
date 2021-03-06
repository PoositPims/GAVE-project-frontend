import React from "react";
import { NavLink, Link } from "react-router-dom";

function DailyDealCard({ id, productPic, productName, productPrice }) {
  return (
    <>
      <NavLink
        to={{ pathname: "/purchase", state: { id } }}
        className="text-decoration-none text-dark"
      >
        <div className=" d-flex py-2 ms-3">
          <div className="text-center border border-1 border-Secondary rounded-3 shadow-lg ">
            <img
              src={productPic}
              className="mt-2 mx-2"
              alt=""
              width="170"
              height="170"
            />
            <h4 className="fs-6">{productName}</h4>
            <h5 className="fs-6"> THB {productPrice}</h5>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default DailyDealCard;
