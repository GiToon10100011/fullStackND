import React from "react";
import "./scss/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="content-inner">
        <address>
          <p>
            <span>(주)영원아웃도어</span>
            <span>대표이사 성기학</span>
            <span>[개인정보보호책임자] 최윤정 상무/CISO</span>
            <span>사업자등록번호 123-45-67890</span>
          </p>
          <p>
            <span>통신판매업 신고번호: 2013-경기성남-0984</span>
            <span>사업자정보확인</span>
          </p>
          <p>
            <span>고객센터 1588-1234</span>
            <span>영원아웃도어 고객센터</span>
          </p>
          <p>
            <span>주소: 경기도 성남시 중원구 사기막골로 169</span>
            <span>
              반송지 주소: 경기도 이천시 마장면 프리미엄 아울렛로 33-20
            </span>
          </p>
          <p>
            <span>온라인몰 고객지원실: 1588-1234</span>
            <span>매장고객 및 A/S 문의: 1588-1234</span>
          </p>
        </address>
        <div className="footer-info">
          <p>Copyright 2025 영원아웃도어. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
