import joblib
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Sample training data
data = [
    ("Finish the project report", "Work"),
    ("Buy groceries", "Personal"),
    ("Doctor appointment at 5", "Urgent"),
    ("Schedule meeting with client", "Work"),
    ("Call mom", "Personal"),
    ("Pay electricity bill", "Urgent"),
]

texts, labels = zip(*data)

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

model = MultinomialNB()
model.fit(X, labels)

# Save model and vectorizer
joblib.dump(model, "model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")

