import React, { useEffect, useState } from "react";

const Image = ({ imageUrl }) => {
  console.log(imageUrl);
  return <img style={{ width: "150px", height: "150px" }} src={imageUrl}></img>;
};
export default Image;
