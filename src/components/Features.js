import React from "react";

export default function Features() {
  const items = ["Secure Payments", "Fast Settlements", "24/7 Support"];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center">Why Choose Us?</h3>
        <p className="text-center text-gray-600 mt-2">
          Powerful tools that help your business grow.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-8 shadow rounded-xl bg-gray-50 hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-blue-600">{item}</h4>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
