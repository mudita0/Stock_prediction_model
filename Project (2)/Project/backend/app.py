import os
from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np
from flask_cors import CORS

print("Current Working Directory:", os.getcwd())

# Initialize Flask app and enable CORS (for cross-origin requests from the frontend)
app = Flask(__name__)
CORS(app)

# Load the trained model (Ensure you've saved the model as 'stock_predictor.pkl' using pickle)
with open(r'"C:\Users\hp\Downloads\Project (2)\Project\model_train\STOCK_PRED.pkl"', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get date input from frontend (sent as a JSON object)
        data = request.get_json()
        date = data['date']  # 'date' field sent from frontend
        
        # Convert the date into Julian date format (same format as in the training data)
        date_julian = pd.to_datetime(date).to_julian_date()

        # Make the prediction
        prediction = model.predict(np.array([[date_julian]]))

        # Send back the prediction as a response (in JSON format)
        return jsonify({'predicted_stock_price': prediction[0]})
    
    except Exception as e:
        # If any error occurs, send back an error message
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
