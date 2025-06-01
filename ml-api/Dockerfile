# Use Python base image
FROM python:3.10

# Set working directory
WORKDIR /app

# Copy requirements if you have one, otherwise install manually
COPY . .

# Install dependencies
RUN pip install flask joblib scikit-learn

# Expose Flask port
EXPOSE 5001

# Start Flask server
CMD ["python", "ml_api.py"]
