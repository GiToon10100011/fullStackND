import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div className="img-box">이미지</div>
      <div className="text-box">
        <h3>제품제목</h3>
        <div>
          <strong>30%</strong>
          <p>100,000원</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
