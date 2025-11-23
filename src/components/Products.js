import React from "react";

export default function Products() {
  const items = ["Payment Gateway", "Payouts", "Subscriptions"];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center">Our Products</h3>
        <p className="text-center text-gray-600 mt-2">
          A complete suite to supercharge your business.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-8 shadow rounded-xl bg-white hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold text-gray-800">{item}</h4>
              <p className="mt-3 text-gray-600">
                Manage your end-to-end payment needs with a single platform.
              </p>
              <button className="mt-4 text-blue-600 hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
