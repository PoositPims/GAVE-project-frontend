import React from 'react'

function SellerProductCard({ productPic, productName, productPrice }) {
    return (
        <>
         {/* <NavLink
              to={{pathname: '/sellerEachPeoduct', state: { product: {id: 1} }}}
              className="text-decoration-none text-dark"
            > */}
            <div className=" d-flex justify-content-evenly py-2 ">
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
        {/* </NavLink> */}
        </>
    )
}

export default SellerProductCard
