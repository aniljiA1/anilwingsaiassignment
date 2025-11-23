import React from "react";

export default function Footer() {
  const sections = ["Company", "Products", "Support"];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        
        <div>
          <h3 className="text-white text-xl font-bold">RazorPayX</h3>
          <p className="mt-3 text-gray-400">
            Modern business payment solutions.
          </p>
        </div>

        {sections.map((sec, index) => (
          <div key={index}>
            <h4 className="text-white font-semibold">{sec}</h4>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact: 8750427198</li>
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-10">
        © Anil Kumar 2025 RazorPayX — All Rights Reserved
      </p>
    </footer>
  );
}
