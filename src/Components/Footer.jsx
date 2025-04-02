import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer py-3 fixed-bottom"
      variant="dark"
      style={{
        background: "linear-gradient(to right, #1a237e, #0d47a1)",
        padding: "15px 0",
      }}
    >
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>MahtoTechPro</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
