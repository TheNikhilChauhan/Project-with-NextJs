import { Meteors } from "@/components/ui/meteors";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="mt-40 flex flex-col justify-center items-center ">
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start w-1/2">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500"></div>
          <h1 className="font-bold text-4xl text-white mb-10 relative z-50 flex justify-center items-center">
            Contact Us
          </h1>
          <p className="font-normal text-base text-slate-300 mb-4 relative z-50 flex justify-center items-center w-full">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="p-3 bg-slate-800 w-full mt-8 rounded-md font-medium"
          />
          <textarea
            placeholder="Your message"
            className="p-3 bg-slate-800 w-full mt-8 rounded-md font-medium h-36 text-lg"
          ></textarea>
          <button className="mt-16 rounded px-3 py-2 bg-teal-600 text-md font-semibold hover:bg-teal-700 flex justify-center items-center">
            Send Message
          </button>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
