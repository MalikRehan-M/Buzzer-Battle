import React, { useState } from "react";

const Singleplayer = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <div
      style={{ padding: "25px", backgroundImage: "url('./background.png')" }}
      className="w-screen h-screen bg-no-repeat bg-cover"
    >
      <h1
        style={{
          fontSize: "45px",
          textDecoration: "underline",
          color: "whitesmoke",
          fontWeight: "bolder",
          textAlign: "center",
        }}
      >
        Single Player
      </h1>
      <div
        style={{
          display: "grid",
          marginTop: "7%",
          justifyContent: "center",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {/* ---------------- UserInfo --------------- */}
        <div
          style={{
            padding: "40px",
            margin: "10px",
            width: "70%",
            textAlign: "left",
            backgroundColor: "yellow",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <h2
            style={{
              textDecoration: "underline",
              fontSize: "32px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            User-Info
          </h2>
          <br />
          <h3>Shivam Kumar</h3>
          <h3>Level: {level}</h3>
          <h3>Points: {score}</h3>
        </div>

        {/* ------------------- Quiz Question ------------- */}
        <div
          style={{
            padding: "40px",
            margin: "10px",
            width: "90%",
            backgroundColor: "red",
            color: "whitesmoke",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <h2 style={{ textDecoration: "underline", fontSize: "32px" }}>
            Quiz Question
          </h2>
          <br />
          <h3 style={{ margin: "25px 5px", fontSize: "25px" }}>
            Q. Which is used for creating frontend application.
          </h3>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "#5dbea3",
                letterSpacing: "2px",
              }}
            >
              ReactJS
            </button>
            <button
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "#5dbea3",
                letterSpacing: "2px",
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
                borderRadius: "5px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "#5dbea3",
                letterSpacing: "2px",
              }}
            >
              NodeJS
            </button>
            <button
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "#5dbea3",
                letterSpacing: "2px",
              }}
            >
              .net
            </button>
          </div>
        </div>

        {/* ---------------- Leaderboard ----------------- */}
        <div
          style={{
            padding: "40px",
            margin: "10px",
            width: "90%",
            textAlign: "center",
            backgroundColor: "greenyellow",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <h2
            style={{
              textDecoration: "underline",
              fontSize: "32px",
              marginBottom: "15px",
            }}
          >
            LeaderBoard
          </h2>
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
