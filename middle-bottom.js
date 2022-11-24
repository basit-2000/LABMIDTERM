import React, { useState } from "react";
import "./middle-bottom.css";

export default function MiddleBottom() {
  const [countryList, setCountryList] = useState([
    [
      "1",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "Brazil",
      "12346.2",
    ],
    [
      "2",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "Brazil",
      "12346.2",
    ],
    [
      "3",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "Brazil",
      "12346.2",
    ],
    [
      "4",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "Brazil",
      "12346.2",
    ],
    [
      "5",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "Brazil",
      "12346.2",
    ],
    [
      "6",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "Brazil",
      "12346.2",
    ],
    [
      "6",
      "https://digitalhub.fifa.com/transform/1a2cba99-465b-40e2-a2f2-ca904e9f5d70/serbia?io=transform:fill,height:150",
      "Serbia",
      "12546.2",
    ],
    [
      "7",
      "https://digitalhub.fifa.com/transform/59dbba50-77c1-4a2f-bc60-5c35fdfda3f6/southkorea?io=transform:fill,height:150",
      "Korea",
      "12246.2",
    ],
    [
      "8",
      "https://digitalhub.fifa.com/transform/1df8a5a5-0a3d-498e-a935-9741ff27fe30/portugal?io=transform:fill,height:150",
      "Portugal",
      "12446.2",
    ],
    [
      "9",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-3/ENG?tx=c_fill,g_auto,q_auto,w_150,h_100",
      "England",
      "12146.2",
    ],
    [
      "10",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-3/CMR?tx=c_fill,g_auto,q_auto,w_150,h_100",
      "cameroon",
      "11236.2",
    ],
    
  ]);

  const [countryList1, setCountryList1] = useState([
    [
      "1",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "USA",
      "12346.2",
    ],
    [
      "2",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "USA",
      "12346.2",
    ],
    [
      "3",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "USA",
      "12346.2",
    ],
    [
      "4",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "USA",
      "12346.2",
    ],
    [
      "5",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "USA",
      "12346.2",
    ],
    [
      "6",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "USA",
      "12346.2",
    ],
    [
      "7",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "USA",
      "12346.2",
    ],
    [
      "8",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "USA",
      "12346.2",
    ],
    [
      "9",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "USA",
      "12346.2",
    ],
    [
      "10",
      "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46",
      "USA",
      "12346.2",
    ],
  ]);

  const myStyle = {
    fontSize: 20,
  };
  return (
    <div id="middle-bottom">
      <div id="informer-container">
        <img
          id="cocacola-logo"
          src="https://cloudinary.fifa.com/m/63ff8e8dd082e82c/original/Coke-FIFA-Generic-Positive-Composite_v2-1-2x.png?tx=c_fill,g_auto,q_auto:best,w_245"
        />
        <h3>WORLD RANKING</h3>
        <text>
          The official world rankings of the international mens and womens
          teams.
        </text>

        <h6 style={{ color: "#2172b1" }}>FIFA/cocacola world Ranking</h6>
      </div>
      <div id="men-container">
        <h3>Men</h3>
        {countryList.map((item) => {
          return (
            <div id="row-container">
              <h1 style={myStyle}>{item[0]}</h1>
              <img style={{ width: 30 }} id="flag" src={item[1]}></img>
              <h2 style={myStyle}>{item[2]}</h2>
              <h2 style={myStyle}>{item[3]}</h2>
              <hr></hr>
            </div>
          );
        })}
      </div>
      <div id="women-container">
        <h3>Women</h3>

        <div id="men-container">
          {countryList1.map((item) => {
            return (
              <div id="row-container">
                <h1 style={myStyle}>{item[0]}</h1>
                <img style={{ width: 30 }} id="flag" src={item[1]}></img>
                <h2 style={myStyle}>{item[2]}</h2>
                <h2 style={myStyle}>{item[3]}</h2>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
