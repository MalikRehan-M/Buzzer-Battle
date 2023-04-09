import React, { useState, useEffect } from "react";
import ReactCountdownClock from "react-countdown-clock";
import { ProgressBar } from "react-progressbar-fancy";
import Avatar from "react-avatar";
import { io } from "socket.io-client";
import axios from "axios";

interface FormEvent extends React.FormEvent<HTMLFormElement> {
  preventDefault(): void;
}
interface Message {
  sender: string;
  text: string;
}
type MessageList = Message[];
interface User {
  name: string;
  pos: string;
  id: string;
}

interface Users {
  left: User[];
  right: User[];
}

const socket = io("http://localhost:4000");

let index = 0;
const Multiplayer = () => {
  let [users, setUsers] = useState<Users>({ left: [], right: [] });
  let [quiz, setQuiz] = useState<any>({ index: 0 });
  let [pos, setPos] = useState(false);
  let [red, setRed] = useState(100);
  let [blue, setBlue] = useState(100);
  const [name, setName] = useState<string | null>("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<MessageList>([]);

  const getData = async () => {
    index++;
    let data = await axios.get(
      "https://weak-skillful-snowman.glitch.me/avengers"
    );
    let temp=data.data
    await setQuiz({ ...data.data[0], index: 0 });
    console.log(quiz);
  };
  useEffect(() => {
    let temp = prompt("Pick a name for yourself, and do pick a team");
    setName(temp);
    // Listen for incoming messages from server
    socket.on("chat message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    socket.on("updateUsers", (arr) => {
      console.log(arr);
      setUsers(arr);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Send message to server
    socket.emit("chat message", { sender: name, text });
    setText("");
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=1380&t=st=1681003461~exp=1681004061~hmac=435200dc407117a95c1ca3be2ad9494db8804124fd35ea1ec94cbba796874069')",
      }}
      className="w-screen h-screen bg-no-repeat bg-cover bg-center"
    >
      <div className="w-screen flex justify-between pt-8">
        <div className="  w-4/12 ">
          {" "}
          <ProgressBar
            className="space"
            label={"Team Blue"}
            progressColor={"blue"}
            darkTheme
            score={blue}
          />
        </div>
        <div className="h-24">
          <ReactCountdownClock alpha={1} seconds={10} color="cyan" size={130} />
        </div>
        <div className="text-black w-4/12">
          <ProgressBar
            className="space"
            label={"Team Red"}
            progressColor={"red"}
            darkTheme
            score={red}
          />
        </div>
      </div>
      <div className="w-screen flex justify-between mt-12 h-1/2">
        <div className="w-1/4 h-5/6 flex flex-col items-center">
          <button
            type="submit"
            style={{ transform: "skew(-8deg)" }}
            className="text-xl w-1/2 py-2 px-4  rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => {
              getData();
              setPos(true);
              if (pos) return;
              socket.emit("name", {
                pos: "left",
                name,
              });
            }}
          >
            Team Blue
          </button>
          <br />
          {users.left.map((i) => {
            console.log(i);
            return (
              <Avatar
                name={i.name}
                size="150"
                color="#00CED1"
                round="15px"
                style={{ transform: "skew(-8deg)" }}
              />
            );
          })}
        </div>
        <div className="w-2/5 flex flex-col justify-between">
          <div
            className="border-2 border-cyan-500 text-white  w-full h-3/4 p-10"
            style={{ transform: "skew(-8deg)", borderRadius: "15px" }}
          >
            <p className="text-2xl">
              <span>{"->"}</span> What is the name of the artificial
              intelligence program created by Tony Stark that becomes self-aware
              and turns against the Avengers in Avengers: Age of Ultron?
            </p>
            <div className="gap-2 grid grid-cols-2 mt-10">
              
                  <button
                    type="submit"
                    className="py-2 px-4 border text-xl rounded-md shadow-sm text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                  Chris Pratt
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 border text-xl rounded-md shadow-sm text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    Chris Evans
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 border text-xl rounded-md shadow-sm text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                   Chris Hemsworth
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 border text-xl rounded-md shadow-sm text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    Chris Pine
                  </button>

            </div>
          </div>

          <button
            style={{
              background: "linear-gradient(#fefb72, #fefca3)",
              borderRadius: "6px",
              height: "80px",
              width: "185px",
            }}
            className="flex items-center justify-center m-auto mt-6"
          >
            <span
              className=" text-4xl truncate"
              style={{
                background: "linear-gradient(#ede801, #fefb72)",
                transform: "skew(-8deg)",
                color: "#343F65",
                height: "60px",
                width: "160px",
              }}
            >
              Tap !
            </span>
          </button>
        </div>
        <div className=" w-1/4 h-5/6 flex flex-col items-center">
          <button
            type="submit"
            style={{ transform: "skew(-8deg)" }}
            className="text-xl w-1/2 py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-red-500"
            onClick={() => {
              getData();
              setPos(true);
              if (pos) return;
              socket.emit("name", {
                pos: "right",
                name,
              });
            }}
          >
            Team Red
          </button>
          <br />
          {users.right.map((i) => {
            console.log(i);
            return (
              <Avatar
                name={i.name}
                size="150"
                color="#ff6600"
                round="15px"
                style={{ transform: "skew(-8deg)" }}
              />
            );
          })}
        </div>
      </div>
      <div className="text-white w-3/5 m-auto place-self-end">
        <div>
          <div
            className="bg-white py-10 px-4 shadow sm:rounded-lg sm:px-10 ml-10"
            style={{
              height: "250px",
              opacity: "85%",
              overflow: "scroll",
              transform: "skew(-10deg)",
            }}
          >
            <ul className="space-y-2">
              {messages.map((message, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-medium">{message.sender}: </span>
                  <span>{message.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full">
          <form
            className="space-y-6 flex flex-row w-full"
            onSubmit={handleSubmit}
          >
            <div>
              <div
                className="mt-6 text-black opacity-80"
                style={{ width: "1083px", transform: "skew(-8deg)" }}
              >
                <textarea
                  placeholder="type here....."
                  id="message"
                  name="message"
                  rows={1}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div>
              <button
                style={{ transform: "skew(-8deg)" }}
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Multiplayer;
