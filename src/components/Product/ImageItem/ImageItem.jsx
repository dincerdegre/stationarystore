import React, { Fragment, useState } from "react";
import classes from "./ImageItem.module.scss";

const ImageItem = ({ image = [], title }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const selectedImageHandler = (i) => {
    setSelectedImage(i);
  };
  return (
    <Fragment>
      <div className={classes.mainImage}>
        {image && <img src={image[selectedImage]} alt="" />}
      </div>
      <div className={classes.imageThumbs}>
      {image?.map((item,index) => <img src={item} alt="" onClick={()=>{selectedImageHandler(index)}} />)}
      </div>
    </Fragment>
  );
};

export default ImageItem;
