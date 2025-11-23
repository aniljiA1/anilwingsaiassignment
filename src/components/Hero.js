import React from "react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">

        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Powering Payments for{" "}
            <span className="text-blue-600">India's Fastest Growing Businesses</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Accept payments, automate payouts, and manage your entire business finances.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Started →
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://razorpay.com/build/browser/static/home-desktop.4b9f0e56.png"
            alt="Hero section"
            className="w-full rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
