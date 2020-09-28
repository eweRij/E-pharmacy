import React, { useEffect, useState } from "react";
// import "react-google-photo/styles.css";
import GooglePhoto from "react-google-photo";
const Image = () => {
  //   let getImageUrls = require("get-image-urls");
  //   getImageUrls("http://google.com", function (err, images) {
  //     if (!err) {
  //       console.log("Images found", images.length);
  //       console.log(images);
  //     } else {
  //       console.log("ERROR", err);
  //     }
  //   });
  //   return <div>Obrazek</div>;

  const images =
    "https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

  return (
    <div>
      <GooglePhoto src={images} />
    </div>
  );
};
export default Image;
