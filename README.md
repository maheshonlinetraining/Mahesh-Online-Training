# Mahesh Online Training - Official Website & Platform

A modern, high-converting, and visually stunning web platform for **Mahesh Online Training**—an online training institute offering industry-ready live IT and software courses.

---

## 🌟 Key Highlights & Features

- **Modern & High-Converting UI**: Deep tech navy aesthetic, neon cyan/emerald accents, glowing glassmorphic panels, and fluid responsive design.
- **Dynamic Course Catalog**: Filterable by category (*Web Development, Cloud & DevOps, AI & Data Science, Software Testing*), search with instant keyword tags, badges (*Bestseller, Trending, Weekend Batch*), and transparent pricing with discounts.
- **Interactive Syllabus Drawer/Modal**: Detailed module-by-module breakdown, technologies learned, project highlights, and one-click syllabus download.
- **Upcoming Batches Schedule**: Real-time batch calendar showing starting dates, morning/evening/weekend timings, mentor profiles, and seat availability (*Filling Fast, Few Seats Left*).
- **Placement & Alumni Spotlight**: Showcases 150+ hiring partner MNCs (*Google, Amazon, TCS, Infosys, Capgemini, Deloitte, etc.*), real student transition stories with salary hike badges, and a 4-step placement roadmap.
- **Free Demo Booking Engine**: High-converting lead capture modal connected directly to the backend REST API with instant confirmation.
- **Honest Value Comparison**: Comparison matrix explaining why live mentorship with Mahesh Sir outperforms generic pre-recorded video portals.
- **Interactive FAQ Accordion**: Expandable answers for course timings, missed classes, recordings, and EMI installments.
- **Direct WhatsApp & Phone Integration**: Instant floating WhatsApp chat button and direct phone admission hotline.

---

## 🛠️ Architecture & Tech Stack

### Frontend
- **React.js 18** (with modern functional components & hooks)
- **Vite** (for blazing fast build & HMR development)
- **Tailwind CSS** (for custom glassmorphic styling, glow shadows, and responsive layouts)
- **Lucide Icons** (clean, modern tech and action icons)

### Backend
- **Node.js & Express REST API** (modular routes, controllers, and service layer)
- **CORS & Environment Support** (handles local development and production origins)
- **Decoupled Data Architecture**: In-memory repository with local JSON persistence (`backend/src/data/inquiries.json`).
- **Future Database Ready**: Easily plug in **MongoDB (Mongoose)**, **PostgreSQL (Prisma/pg)**, or **Firebase/Supabase** into `backend/src/services/dataService.js` without touching frontend components.

---

## 🚀 Quick Start Guide

### 1. Start the Backend API Server
```bash
cd backend
npm install
npm start
```
*Backend runs on:* `http://localhost:5000`  
*Health Check:* `http://localhost:5000/api/health`

### 2. Start the Frontend React Application
```bash
cd frontend
npm install
npm run dev
```
*Frontend runs on:* `http://localhost:3000` (proxies `/api` requests to port 5000 automatically)

---

## 📂 Project Structure

```
Mahesh_Online_Training/
├── backend/
│   ├── src/
│   │   ├── data/              # Courses, Batches, Testimonials & Inquiries JSON
│   │   ├── routes/            # Express REST API endpoints (/courses, /batches, /inquiries)
│   │   ├── services/          # Data service layer (ready for MongoDB / PostgreSQL)
│   │   └── server.js          # Express server with CORS & logging
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx            # Header with announcement & quick links
│   │   │   ├── Hero.jsx              # Hero with stats, live preview badge, search & CTAs
│   │   │   ├── Features.jsx          # Live classes, projects, 1-on-1 mentorship
│   │   │   ├── CourseCatalog.jsx     # Filterable courses with badges & pricing
│   │   │   ├── CourseModal.jsx       # Detailed curriculum & syllabus drawer
│   │   │   ├── UpcomingBatches.jsx   # Live batch calendar & seat status
│   │   │   ├── Placements.jsx        # Hiring partners, alumni stories & salary hikes
│   │   │   ├── WhyUsComparison.jsx   # Live mentorship vs recorded portals comparison
│   │   │   ├── FaqSection.jsx        # Expandable FAQs accordion
│   │   │   ├── ContactSection.jsx    # Callback request form & office details
│   │   │   ├── DemoBookingModal.jsx  # Interactive free demo class booking form
│   │   │   └── Footer.jsx            # Footer links & copyright
│   │   ├── services/
│   │   │   └── api.js                # Frontend REST API client
│   │   ├── App.jsx                   # Master application layout
│   │   ├── index.css                 # Tailwind utilities & glassmorphism
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## 🔮 Future Database Integration (Plug & Play)

When you are ready to connect a database:
1. Open [`backend/src/services/dataService.js`](file:///c:/Users/DELL/OneDrive/Desktop/Mahesh_Online_Training/backend/src/services/dataService.js).
2. Replace or augment the methods (`getAllCourses`, `createInquiry`, etc.) with Mongoose (MongoDB) or Prisma / Sequelize (PostgreSQL/MySQL).
3. The frontend and REST endpoints (`/api/courses`, `/api/inquiries`, etc.) will continue functioning without any changes needed!
