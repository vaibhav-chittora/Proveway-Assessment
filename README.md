# 🛍️ Interactive Offer Selector UI

This is a responsive front-end project built using **HTML**, **CSS**, and **Vanilla JavaScript**. It replicates a UI commonly used in e-commerce offers (like Buy One Get One) where users can select from multiple product bundles. Each offer box dynamically expands 
after clicking on it to reveal additional configuration options.

## 🌐 Live Demo - https://vaibhav-chittora.github.io/Proveway-Assessment/

## 📸 Preview

![UI Preview](/result.png)

## 🚀 Features

- Three interactive pricing boxes
- Dynamic expansion on selection
- Conditional dropdowns for sizes and colors (for 2-unit selection)
- Hover effects and smooth transitions
- Responsive layout for mobile devices
- Clean code structure using semantic HTML and modular CSS

## 🧰 Tech Stack

- HTML5
- CSS3 (No frameworks, handcrafted styles)
- JavaScript (ES6+, no libraries)

## 📂 Project Structure

Proveway-Assessment/

    ├── index.html 
    ├── style.css 
    ├── script.js 
    └── README.md 


## 🧠 Logic Overview

- Each box is clickable and mutually exclusive using a shared radio input.
- When a box is clicked:
  - All others collapse and reset.
  - The clicked box expands and shows its content (`.options` section).
- Option selectors are only shown for specific plans (e.g., 2-unit combo).

## 📱 Responsive Behavior

The layout adapts for mobile using a `max-width` media query. Dropdowns stack vertically for narrow screens to improve usability.

## 🛠️ How to Run

Just clone/download the repo and open `index.html` in your browser:

```bash

git clone https://github.com/vaibhav-chittora/Proveway-Assessment.git

cd Proveway-Assessment

open index.html

```
