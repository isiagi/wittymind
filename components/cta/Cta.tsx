"use client";

import Helper from "@/helpers/Helper";
import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";

function Cta() {
  const formRef = useRef<any>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const confirmSubmit = confirm("Are you sure you want to submit");

    if (confirmSubmit) {
      await Helper({ formRef, tesing: false });
    } else {
      await Helper({ formRef, tesing: true });
    }
  };
  return (
    <section className="text-gray-600 body-font">
      <ToastContainer />
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Get in Touch
          </h1>
          <p className="leading-relaxed mt-4">
            We&lsquo;d love to hear from you! Whether you have a project in
            mind, need technical advice, or simply want to say hello, our team
            is here and ready to assist. Drop us a message below and let&lsquo;s
            start the conversation that could spark innovation and
            collaboration.
          </p>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Contact Us
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="telephone"
              className="leading-7 text-sm text-gray-600"
            >
              Telephone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="subject"
              className="leading-7 text-sm text-gray-600"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Wittyloop Tech, Your Tech Partner.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Cta;
