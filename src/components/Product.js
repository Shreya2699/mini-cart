import React from "react";
let productName="Iphone ultra max pro 2";
let productPrice="5,000";
let productImgSrc="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg";

let ratingCount=0;


function Product(props){
    let ratingStar="";
    for(let i=0; i<props.ratingCount ;i++){
        ratingStar=ratingStar+"⭐"
    }
    return(
        <div className="Product_container">
            <img src={props.ImgSrc} className="Product_image" />
            <h2>{props.productName}</h2>
            <p>
               {ratingStar}
            </p>
            <p>RS.{props.productPrice}</p>
            <button className="product_button">Buy now</button>
        </div>
    )
}
export default Product;