#This repository contains the source code for the Disaster Management Portal, a web-based platform designed to help predict, manage, and provide timely information during natural disasters.
 It includes features for disaster prediction, user authentication, emergency alerts, weather forecasts, and more.


Features
   ->User Authentication: Users can register and log in securely to access personalized disaster alerts and information.

   ->Personalized Messages: The portal sends personalized alerts and messages to users in case of an imminent disaster based on their location and preferences.

   ->Latest News and Weather Forecast: Stay updated with the latest news and weather forecasts to help you prepare for any potential disaster.

   ->Emergency Contacts: Provides easy access to emergency contact numbers and resources to assist users during a disaster.

   ->Early Prediction of Disasters: Leverages data and algorithms to predict potential natural disasters (e.g., earthquakes, hurricanes, floods) based on available data and historical patterns.


How it Works
   ->User Authentication: Users can create accounts and log in to receive tailored notifications. Authentication is powered by JWT (JSON Web Tokens) for secure login sessions.
   ->Disaster Prediction: The system uses predictive models (implemented in Python) to estimate potential natural disasters based on real-time data, weather patterns, and historical trends.
   ->Alert System: The portal sends personalized disaster alerts to users via email/SMS when a disaster is predicted based on their location.
   ->Weather Forecast: It fetches real-time weather data using a weather API to display forecasts and help users prepare for impending disasters.
   ->Emergency Contacts: Users can easily access critical emergency numbers and nearby shelters.


Technologies Used
   ->Frontend: React, HTML, Tailwind CSS
   ->Weather API: OpenWeatherMap API (or any similar service)
   ->Backend and Database: Supabase
   ->Authentication: Supabase


Contributing
   We welcome contributions to improve the Disaster Management Portal. To contribute, please follow these steps:
     ->Fork the repository
     ->Create a new branch (git checkout -b feature-name)
     ->Make your changes and commit them (git commit -am 'Add feature')
     ->Push to the branch (git push origin feature-name)
     ->Create a new Pull Request


License
    This project is licensed under the MIT License - see the LICENSE file for details.
   
