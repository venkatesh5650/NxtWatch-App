🎥 NxtWatch App

A YouTube-like video streaming web application built with ReactJS.
It features authentication, dark/light theme toggle, video categories (Trending, Gaming, Saved), search functionality, and the ability to save videos for personalized viewing.

✨ Features

🔐 User Authentication – Login with credentials (JWT-based).

🌓 Dark/Light Mode – Persistent theme toggle across routes.

🔍 Search & Filter – Search videos by keywords in Home.

📺 Trending & Gaming Routes – Browse categorized videos.

❤️ Saved Videos – Save & manage your favorite videos.

🎥 Video Details Page – Like, Dislike, and Save videos.

⚠️ Failure Views – Friendly error handling with retry options.

📱 Responsive UI – Works seamlessly on mobile, tablet, and desktop.

🛠 Tech Stack

Frontend: ReactJS, React Router, JSX

Styling: CSS, Styled Components, Flexbox

State Management: React Hooks (useState, useEffect, Context API)

Authentication: JWT Token stored in cookies

APIs: REST APIs from https://apis.ccbp.in

Third Party: react-loader-spinner, react-player

📂 Project Structure
```
NxtWatch-App/
│── public/
│   ├── index.html
│   └── favicon.ico
│
│── src/
│   ├── components/
│   │   ├── LoginForm/
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── Home/
│   │   ├── Trending/
│   │   ├── Gaming/
│   │   ├── SavedVideos/
│   │   ├── VideoItemDetails/
│   │   └── NotFound/
│   │
│   ├── context/
│   │   └── ThemeContext.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
├── README.md
└── .gitignore
```

🔗 API Documentation
1️⃣ Login API

POST https://apis.ccbp.in/login

Request:

```
{
  "username": "rahul",
  "password": "rahul@2021"
}
```


Response:

{
  "jwt_token": "eyJhbGciOiJIUzI1NiIs..."
}

2️⃣ Home Videos API

GET https://apis.ccbp.in/videos/all?search=

Response includes list of all videos.

3️⃣ Trending Videos API

GET https://apis.ccbp.in/videos/trending

Response: List of trending videos.

4️⃣ Gaming Videos API

GET https://apis.ccbp.in/videos/gaming

Response: List of gaming videos.

5️⃣ Video Details API

GET https://apis.ccbp.in/videos/:id

Response includes video details, channel info, and stats.

▶️ How to Run Locally

Clone the repo

git clone https://github.com/your-username/NxtWatch-App.git
cd NxtWatch-App


Install dependencies

npm install


Start the development server

npm start


Open in browser

http://localhost:3000

📷 Screenshots
```
🔐 Login Page
```
<img width="821" height="552" alt="Screenshot 2025-08-29 113032" src="https://github.com/user-attachments/assets/37c8cedc-2595-4f31-b376-e4b391754ca9" />


🏠 Home with Videos

<img width="1351" height="591" alt="Screenshot 2025-08-29 113138" src="https://github.com/user-attachments/assets/1210df14-b436-4eb0-a4f4-23df19a832e3" />


🔥 Trending Page

<img width="1345" height="579" alt="Screenshot 2025-08-29 113202" src="https://github.com/user-attachments/assets/ded2f3e6-edae-4ce1-bc09-73c892c665c3" />


🎮 Gaming Page

<img width="1349" height="586" alt="Screenshot 2025-08-29 113227" src="https://github.com/user-attachments/assets/ba8d5e35-a708-4428-8ff5-00492ca426d5" />


📺 Video Details

<img width="1348" height="600" alt="Screenshot 2025-08-29 113430" src="https://github.com/user-attachments/assets/104c2f0b-03a0-4db8-a8b2-08e54ec1ca86" />

💾 Saved Videos Page 

<img width="1345" height="588" alt="Screenshot 2025-08-29 113350" src="https://github.com/user-attachments/assets/ac1a5899-e0d7-4316-a23e-7fb9f4012638" />



🌟 What I Learned

Implementing JWT Authentication & route protection.

Designing dark/light theme with Context API.

Handling API errors gracefully with loader & retry.

Building a responsive, component-driven UI in React.

Integrating React Player & Styled Components.

🙌 Acknowledgements

This project was built as part of NxtWave CCBP 4.0 Academy learning journey.
