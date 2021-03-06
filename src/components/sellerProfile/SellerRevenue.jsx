import React, { useContext, useEffect, useState } from "react";
import axios from "../../config/axios";
import { AuthContext } from "../../contexts/AuthContext";

function SellerRevenue({ salesInfo: { renenue } }) {
  const { user } = useContext(AuthContext);
  // console.log(sellerMustdos);

  // let totalRevenue = salesProduct.amount.reduce((a, c) => a + c.price * c.qty, 0);
  // let total = itemPrices;

  // let totalRevenue = sellerMustdos.reduce(
  //   (a, c) => a + c.price * c.quantity,
  //   0
  // );
  // console.log(totalRevenue);

  return (
    <div>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 p-3 text-primary">ภาพรวมรายได้ของฉัน</h4>
        <div className="d-flex">
          <div
            className="ms-3 border-end border-3 border-primary"
            style={{ width: "250px", height: "120px" }}
          >
            <p className="fw-bold fs-5">รายได้ที่สามารถโอนได้</p>
            <p>
              THB
              <span className="fw-bold text-warning ms-2 fs-4">{renenue}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerRevenue;
