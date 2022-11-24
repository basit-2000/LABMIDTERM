import React from "react";
import "./main-page.css";
import Header from "./components/header";
import MiddleTop from "./components/middle-top";
import MiddleBottom from "./components/middle-bottom";
import Footer from "./components/footer";
export default function MainPage() {
  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className="middle-container">
        <div className="left-sidebar">left sidebar</div>

        <div className="middle-section">
          <div className="middle-top">
            <MiddleTop />
          </div>
          <div className="middle-bottom">
            <MiddleBottom />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
