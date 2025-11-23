# Razorpay Landing Page (React + JavaScript + Tailwind CSS)

A fully responsive Razorpay-style landing page built using **React (JavaScript)**, **Tailwind CSS**, and **plain components** with a clean folder structure.


## 🚀 Tech Stack

* **React.js (JavaScript)**
* **Tailwind CSS**
* **React Icons** (optional)


## 📂 Folder Structure

razorpay-landing/
│
├── public/
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── Products.js
│   │   └── Footer.js
│   │
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── styles.css
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

## 🔧 Installation & Setup



```
git clone https://github.com/your-username/razorpay-landing.git
cd razorpay-landing
```

### 2️⃣ Install dependencies

npm install

### 3️⃣ Start the development server

npm start


## 🖼️ Screens Included

* **Navbar** – Razorpay style
* **Hero Section** – Headline, Subtext, Buttons, Right Image
* **Features Section** – Multiple feature blocks
* **Products Section** – Showcasing products/services
* **Footer** – Responsive footer with links


## 📌 Tailwind Setup

### tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

### index.css

@tailwind base;
@tailwind components;
@tailwind utilities;




## 🚀 Deploy on Vercel

Deploy link: https://anilwingsaiassignment.vercel.app/



