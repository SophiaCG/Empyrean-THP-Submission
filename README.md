# Empyrean News

A take-home mobile app project that interacts with a mock API server. Built with SwiftUI, this app demonstrates login authentication, fetching and displaying posts, user and comment information, as well as local data handling and error resilience.

### Prerequisites

- Node.js (version 14 or later)  
- npm (Node package manager)  


## 🚀 Features

- ✅ Login with JWT authentication
- 📃 Display list of posts after login
- 👤 Show author details for each post
- 💬 View post details, comments, and author info
- ❤️ Favorite/unfavorite items
- 🧭 Smooth navigation and screen transitions
- 🔄 Loading & error states with retry handling


## 🛠 Tech Stack

- **Language:** Swift
- **UI Framework:** SwiftUI
- **Architecture:** MVVM
- **Networking:** URLSession
- **Persistence:** Core Data (for favorites)


## 📱 How to Run

1. Clone the repo using this command
```bash
git clone --recurse-submodules https://github.com/SophiaCG/Empyrean-THP-Submission.git
```
3. Install and start the mock API server using the following commands
```bash
npm install
npm start
```

5. Open the `.xcodeproj` or `.xcworkspace` file in Xcode  
6. Build and run on iOS Simulator or physical device (iOS 16+)

## ✅ Login Credentials

Use these credentials to log in:

```plaintext
username: test
password: password123
```

## ⚖️ Assumptions & Tradeoffs
- The app assumes a stable internet connection except when chaos mode simulates errors
- Only one user will use this app (no multi-user support)
- Items, users, comments will remain a manageable size and will not increase
- Mock API responses are always consistent and follow the expected data format
- Chose simplicity over extensive error handling for some API failures to save time

## ⏳ What I’d Improve With More Time
- Add comprehensive unit tests and UI tests
- Add accessibility and localization features
- Add smooth animations and visual polish
