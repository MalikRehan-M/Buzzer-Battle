import React, { useState } from "react";

const Singleplayer = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <div style={{ padding: "25px", backgroundColor: "#f2e3c6" }}>
      <h1 style={{ textDecoration: "underline" }}>Single Player</h1>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "repeat(3,1fr)",
          height: "80vh",
        }}
      >
        {/* ---------------- UserInfo --------------- */}
        <div
          style={{
            // border: "1px solid black",
            padding: "20px",
            margin: "10px",
            width: "70%",
            textAlign: "left",
          }}
        >
          <h2 style={{ textDecoration: "underline" }}>User-Info</h2>
          <br />
          <h3>Shivam Kumar</h3>
          <h3>Level: {level}</h3>
          <h3>Points: {score}</h3>
        </div>

        {/* ------------------- Quiz Question ------------- */}
        <div
          style={{
            // border: "1px solid black",
            padding: "20px",
            margin: "10px",
            width: "90%",
          }}
        >
          <h2 style={{ textDecoration: "underline" }}>Quiz Question</h2>
          <br />
          <h3>1. Which is used for creating frontend application.</h3>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              style={{
                padding: "5px 10px",
                border: "1px solid black",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              ReactJS
            </button>
            <button
              style={{
                padding: "5px 10px",
                border: "1px solid black",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              ExpressJS
            </button>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              style={{
                padding: "5px 10px",
                border: "1px solid black",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              NodeJS
            </button>
            <button
              style={{
                padding: "5px 10px",
                border: "1px solid black",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              .net
            </button>
          </div>
        </div>

        {/* ---------------- Leaderboard ----------------- */}
        <div
          style={{
            // border: "1px solid black",
            padding: "20px",
            margin: "10px",
            width: "90%",
            textAlign: "center",
          }}
        >
          <h2 style={{ textDecoration: "underline" }}>LeaderBoard</h2>
          <br />
          <h3>1. Malik</h3>
          <h3>2. Pooja</h3>
          <h3>3. Shivam</h3>
        </div>
      </div>
    </div>
  );
};

export default Singleplayer;
