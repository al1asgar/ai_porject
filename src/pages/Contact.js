import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("/api/contact", { message });
      alert("Message sent!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
        className="border p-2 w-full"
      ></textarea>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-2">
        Send
      </button>
    </div>
  );
};

export default Contact;
