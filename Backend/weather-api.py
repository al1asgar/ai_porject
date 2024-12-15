from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow CORS for cross-origin requests

# OpenWeatherMap API URL and your API key
BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
API_KEY = '18464d700e85d54e7297ce8290c6df3b'  

@app.route('/weather', methods=['GET'])
def get_weather():
    # Get city name from query parameters
    city = request.args.get('city')
    print(f"Received city: {city}")  # Debugging output

    if not city:
        return jsonify({"error": "City parameter is required"}), 400

    # Build the request URL
    url = f'{BASE_URL}?q={city}&appid={API_KEY}&units=metric'
    try:
        # Make the request to OpenWeather API
        response = requests.get(url)
        print(f"API response status code: {response.status_code}")  # Debugging output

        # If the response is successful, return the weather data
        if response.status_code == 200:
            weather_data = response.json()
            return jsonify(weather_data)
        else:
            # If there was an error from the API, return the error message
            print(f"Error: {response.json()}")
            return jsonify({"error": "Unable to fetch weather data"}), 500
    except Exception as e:
        # Catch and log any exceptions
        print(f"Exception occurred: {e}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    # Run the Flask app on 127.0.0.1:8000
    app.run(debug=True, host="127.0.0.1", port=8000)
