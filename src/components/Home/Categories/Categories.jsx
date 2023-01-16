import React from "react";
import classes from './Categories.module.scss';
import BannerItem from "../BannerItem/BannerItem";

const Categories = () => {
  return <div className={classes.categories}>
    <h2>Discover Products</h2>
    <div className={classes.container}>
        <BannerItem image="/images/promobanner/daian-gan-8_d05sj9JVc-unsplash.jpg" title="School Stationary Items" desc="save 30%" align="left" />
        <BannerItem image="/images/promobanner/northfolk-kr-FHgk3BRY-unsplash.jpg" title="Gifts & Decorations" desc="save 10%" />
        <BannerItem image="/images/promobanner/northfolk-Ok76F6yW2iA-unsplash.jpg" title="Office Stationary Items" desc="save 20%" align="right" />
    </div>
  </div>;
};

export default Categories;
