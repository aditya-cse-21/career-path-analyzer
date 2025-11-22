# Career Path Analyzer

A full-stack web application that helps users analyze their career path by identifying skill gaps, generating personalized roadmaps, and displaying the latest tech news.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Axios** - HTTP client for external API calls
- **CORS** - Cross-origin resource sharing

## 📁 Folder Structure

```
CodeAtRandom/
├── backend/
│   ├── controllers/
│   │   ├── skillGapController.js
│   │   ├── roadmapController.js
│   │   └── newsController.js
│   ├── routes/
│   │   ├── skillGap.js
│   │   ├── roadmap.js
│   │   └── news.js
│   ├── utils/
│   │   ├── skillUtils.js
│   │   └── roadmapUtils.js
│   ├── data/              # Auto-generated (stores last requests)
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SkillGapAnalyzer.jsx
│   │   │   ├── CareerRoadmap.jsx
│   │   │   └── TechNews.jsx
│   │   ├── pages/
│   │   │   ├── CareerGoalInput.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── api/
│   │   │   └── careerApi.js
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── CareerGoalInput.css
│   │   │   ├── Dashboard.css
│   │   │   ├── SkillGapAnalyzer.css
│   │   │   ├── CareerRoadmap.css
│   │   │   └── TechNews.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Base URL
- Development: `http://localhost:5000`
- Production: Update `VITE_API_URL` in frontend environment variables

### 1. POST `/api/skill-gap`
Analyzes the skill gap between current skills and target role requirements.

**Request Body:**
```json
{
  "targetRole": "Backend Developer",
  "currentSkills": ["Java", "Git"]
}
```

**Response:**
```json
{
  "matchedSkills": ["Java", "Git"],
  "missingSkills": ["Spring Boot", "SQL", "APIs"],
  "recommendations": [
    "Learn Spring Boot: Master Spring Boot fundamentals, REST APIs, and dependency injection",
    "Learn SQL: Start with basic queries, then move to joins and subqueries",
    "Learn APIs: Focus on practical projects and hands-on experience"
  ],
  "learningOrder": ["SQL", "APIs", "Spring Boot"]
}
```

**Available Roles:**
- `FrontendDeveloper`
- `Backend Developer`
- `Data Analyst`

---

### 2. POST `/api/roadmap`
Generates a career roadmap for the target role.

**Request Body:**
```json
{
  "targetRole": "Backend Developer"
}
```

**Response:**
```json
{
  "role": "Backend Developer",
  "phases": [
    {
      "phase": "Phase 1 (1-2 months)",
      "title": "Java Basics",
      "topics": ["Java fundamentals", "Object-Oriented Programming", "Git version control", "IDE setup"],
      "description": "Master Java programming fundamentals"
    },
    {
      "phase": "Phase 2 (2 months)",
      "title": "Framework & Database",
      "topics": ["Spring Boot basics", "RESTful APIs", "SQL databases", "JPA/Hibernate"],
      "description": "Learn Spring Boot framework and database integration"
    },
    {
      "phase": "Phase 3 (1-2 months)",
      "title": "Advanced & Deployment",
      "topics": ["Microservices basics", "System Design fundamentals", "Docker basics", "Cloud deployment"],
      "description": "Advanced backend concepts and deployment strategies"
    }
  ]
}
```

---

### 3. GET `/api/news`
Fetches top 5 HackerNews stories.

**Response:**
```json
[
  {
    "title": "Story Title",
    "url": "https://example.com",
    "score": 123,
    "time": "Dec 15, 2023, 10:30 AM",
    "type": "story",
    "by": "username"
  }
]
```

## 🛠️ How to Run

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

---

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000` (or the next available port)

4. Build for production:
```bash
npm run build
```

---

## 🚢 Deployment

### Frontend (Vercel)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Navigate to frontend directory:
```bash
cd frontend
```

3. Deploy:
```bash
vercel
```

4. Set environment variable:
   - `VITE_API_URL` = Your backend API URL (e.g., `https://your-backend.railway.app`)

### Backend (Railway / Render)

#### Railway:
1. Connect your GitHub repository
2. Select the `backend` folder as the root
3. Set `PORT` environment variable (Railway auto-assigns)
4. Deploy

#### Render:
1. Create a new Web Service
2. Connect your repository
3. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add environment variable `PORT` (optional, defaults to 5000)

### Environment Variables

**Frontend (.env):**
```
VITE_API_URL=http://localhost:5000
```
For production, set this to your backend deployment URL (no trailing slash).

**Backend (.env):**
```
ALLOWED_ORIGINS=http://localhost:3000
PORT=5000
```
For production, set `ALLOWED_ORIGINS` to your frontend deployment URL(s), comma-separated.

See `DEPLOYMENT.md` for detailed deployment instructions.

## 📝 Notes / Assumptions

1. **No Database**: The application uses in-memory data structures and optionally saves last requests to JSON files in `backend/data/`.

2. **Skill Matching**: Skills are matched case-insensitively after normalization (trimming and lowercasing).

3. **HackerNews API**: The app fetches top 5 stories from HackerNews Firebase API. If the API is unavailable, an error message will be displayed.

4. **Session Storage**: Frontend uses `sessionStorage` to pass data between the input page and dashboard. Data is cleared when the browser session ends.

5. **Available Roles**: Currently supports three roles:
   - `FrontendDeveloper`
   - `Backend Developer`
   - `Data Analyst`

6. **Error Handling**: Both frontend and backend include comprehensive error handling with user-friendly messages.

7. **CORS**: Backend is configured to allow requests from the frontend origin.

8. **Responsive Design**: The UI is responsive and works on mobile, tablet, and desktop devices.

## 🎯 Features

- ✅ Skill gap analysis with matched and missing skills
- ✅ Personalized learning recommendations
- ✅ Suggested learning order
- ✅ Career roadmap with phases and topics
- ✅ Latest tech news from HackerNews
- ✅ Clean, minimal, responsive UI
- ✅ Error handling and validation
- ✅ Ready for deployment

## 📄 License

ISC

---

**Built with ❤️ using React, Node.js, and Express**

