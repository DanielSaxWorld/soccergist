import React from "react";
import "./Featuredkits.css";

const Featuredkits = ({
  image1_id,
  text1_id,
  text2_id,
  text3_id,
  text4,
  text5,
  text6,
  text7,
  text8,
}) => {
  return (
    <div className="jersey-card">
      <img
        className="liverpool-card-img"
        src={`https://soccergistonline.com/admin/app/images/${image1_id}`}
      />
      <div className="jersey-year">
        <h1 className="jersey-year-2">
          {text2_id}
          <br />
          {text1_id}
        </h1>
      </div>
      <div className="price">
        <h1 className="price-2">{text3_id}</h1>
      </div>
      <div className="sizes">
        <p className="sizes-2">{text4}</p>
        <div className="small">
          <input type="radio" name="size" id="S" value="S" />
          <label for="S" className="diff-sizes">
            {text5}
          </label>
          <input type="radio" name="size" id="M" value="M" />
          <label for="M" className="diff-sizes">
            {text6}
          </label>
          <input type="radio" name="size" id="L" value="L" />
          <label for="L" className="diff-sizes">
            {text7}
          </label>
          <input type="radio" name="size" id="XXL" value="XXL" />
          <label for="XXL" className="diff-sizes">
            {text8}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Featuredkits;
