import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h1>

        <p className="text-center text-xl font-semibold text-gray-500">
          Want to chat? Message me on WhatsApp and I’ll get back to you as soon as possible.
        </p>

        <a
          href="https://wa.me/201224588735" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-green-600 bg-green-500 px-5 py-3 text-lg font-bold text-white shadow-lg shadow-green-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-green-600"
        >
          <FaWhatsapp size={22} />
          Message Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
