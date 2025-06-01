from flask import Flask, request, jsonify
import joblib

# Load model and vectorizer
model = joblib.load("model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    vector = vectorizer.transform([text])
    prediction = model.predict(vector)[0]

    return jsonify({"category": prediction})

if __name__ == '__main__':
    app.run(debug=True, port=5001)


