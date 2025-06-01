# 📝 Likhita's Smart Task Manager 🧠✔️

A full-stack task management app with **ML-powered task categorization** and secure **JWT authentication**, built with **React, Node.js, MongoDB Atlas, Python Flask**, and styled using **Bootstrap CSS**.

---

## 🚀 Features

- CRUD operations for tasks (Create, Read, Update, Delete)
- Automatic task category prediction using ML (eg: Lifestyle, Travel, Personal, Urgent)
- User authentication using JWT tokens
- Responsive frontend built with React and Bootstrap CSS
- Backend REST API with Node.js, Express, MongoDB Atlas
- ML model served via Python Flask API

---

## 🧠 Machine Learning Integration

- Multinomial Naive Bayes model trained on labeled task examples
- `train_model.py` trains and saves the model and vectorizer
- `ml_api.py` runs a Flask API for prediction at `/predict`
- Backend calls ML API to get predicted category before saving tasks

---

## 🛠 Tech Stack & Versions

| Component          | Technology                 | Version          |
|--------------------|----------------------------|------------------|
| Frontend           | React + Bootstrap CSS      | React 18+, Bootstrap 5+ |
| Backend            | Node.js + Express + MongoDB| Node 18+, Express 4+, MongoDB Atlas |
| Authentication     | JWT (`jsonwebtoken`)       | 9.x+             |
| Machine Learning   | Python 3.10+, Flask, Scikit-learn, joblib | Flask 2+, scikit-learn 1+ |
  
---

## 📁 Project Structure

smart-task-manager/
├── backend/ # Node.js + Express API (JWT, MongoDB)
├── frontend/ # React app (Bootstrap)
├── ML-API/ # Flask ML API + model files
│ ├── train_model.py
│ ├── ml_api.py
│ ├── model.pkl
│ └── vectorizer.pkl
└── README.md

## 🔧 How to Run Locally

### 1. Setup and run the ML API

cd ML-API
python train_model.py     # Train and save model/vectorizer
python ml_api.py          # Start Flask ML API on port 5001

2. Setup and run the backend
cd backend
npm install
Create a .env file in the backend folder with:
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
ML_API_URL=http://localhost:5001/predict

Then start the backend:
npm run dev

3. Setup and run the frontend
cd frontend
npm install
npm start
Open http://localhost:3000 in your browser.

🔐 Authentication Flow
Register/login users to get JWT tokens

Send tokens in Authorization headers to access protected API routes

Backend verifies JWT tokens on requests

📝 Sample API Request to Create Task with ML Category Prediction
POST http://localhost:5000/api/tasks

Request body:

{
  "title": "Buy groceries",
  "description": "Milk, eggs, and bread"
}
Response:

{
  "_id": "some_mongodb_id",
  "title": "Buy groceries",
  "description": "Milk, eggs, and bread",
  "category": "Personal"
}



⚠️ Notes and Limitations
Docker & AWS deployment skipped due to environment constraints

ML integration fully tested locally with Flask API and backend calls

MongoDB Atlas used as cloud DB service

Styling done with Bootstrap CSS

JWT authentication implemented for security

🙌 Acknowledgments
Project developed by Likhita Karanam
Thank you for reviewing my Smart Task Manager!