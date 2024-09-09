import React from "react";

const Footer = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 to-slate-800 py-10 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-gray-300 font-bold tracking-tight">
          TourHoliday.com
        </span>
        <span className="text-gray-300 font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer"> Terms and Conditions</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
