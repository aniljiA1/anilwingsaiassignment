import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">RazorPayX</h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#products" className="hover:text-blue-600">Products</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </div>
    </nav>
  );
}
