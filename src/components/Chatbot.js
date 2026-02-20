import { useState } from "react";
import "../styles/Chatbot.css";

function Chatbot(){

const [message, setMessage] = useState("");
const [chat, setChat] = useState([
  "Hello! How can I help you with reservations?"
]);

const sendMessage = () => {

  if(message.trim() === "") return;

  const userMsg = message.toLowerCase();

  let botReply = "";

  if(userMsg.includes("hello") || userMsg.includes("hi")){
    botReply = "Hello! How can I help you?";
  }
  else if(userMsg.includes("reserve") || userMsg.includes("booking")){
    botReply = "You can make reservation in Reservation page.";
  }
  else if(userMsg.includes("history")){
    botReply = "You can check booking history in History page.";
  }
  else if(userMsg.includes("time")){
    botReply = "We are open from 10 AM to 10 PM.";
  }
  else{
    botReply = "Please provide reservation details.";
  }

  setChat([...chat, "You: " + message, "Bot: " + botReply]);

  setMessage("");
};

return(

<div className="chatbot-container">

<div className="chatbot-title">Chat Support</div>

<div className="chatbot-box">

{chat.map((msg, index) => (
  <div key={index}>{msg}</div>
))}

</div>

<div className="chatbot-input">

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Type message..."
/>

<button onClick={sendMessage}>Send</button>

</div>

</div>

);

}

export default Chatbot;