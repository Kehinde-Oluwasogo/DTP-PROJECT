# DTP PROJECT - Ada National College Dashboard

A comprehensive Student/Admin Dashboard system built with React and Vite, featuring both desktop and mobile-responsive interfaces for educational management.

## 🎯 Project Overview

This is a React application for a Student/Admin Dashboard system with the following features:

### Key Features
- **Dual User Roles**: Student and Admin dashboards with different access levels
- **Responsive Design**: Automatic switching between desktop and mobile interfaces
- **Educational Content**: T-levels overview, progress tracking, and gamification
- **Content Management**: Podcast upload/management and open day events
- **Modern UI**: Glassmorphism effects, gradient themes, and touch-optimized mobile interface

## 🏗️ Project Structure

```
src/
├── components/           # Desktop components
│   ├── AuthForm.jsx
│   ├── CollegeHomePage.jsx
│   ├── Dashboard.jsx
│   ├── LandingPage.jsx
│   ├── OpenDayForm.jsx
│   ├── OpenDayList.jsx
│   ├── PodcastList.jsx
│   ├── PodcastUploadForm.jsx
│   ├── StudentDashboard.jsx
│   ├── AdminDashboard.jsx
│   └── UserList.jsx
├── mobile/               # Mobile-optimized components
│   ├── components/
│   │   ├── MobileCollegeHomePage.jsx
│   │   ├── MobileAuthForm.jsx
│   │   ├── MobileLandingPage.jsx
│   │   ├── MobileDashboard.jsx
│   │   ├── MobileStudentDashboard.jsx
│   │   └── MobileAdminDashboard.jsx
│   ├── styles/
│   │   └── mobile.css
│   ├── MobileApp.jsx
│   └── ResponsiveApp.jsx
├── context/
│   └── AppContext.jsx     # Global state management
├── App.jsx               # Desktop application entry
├── main.jsx             # Application entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/DTP-PROJECT.git
   cd DTP-PROJECT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically switch between desktop and mobile views based on screen size

## 📱 Responsive Design

The application automatically detects screen size and renders appropriate interfaces:

- **Desktop View**: Full-featured interface with sidebar navigation (>768px)
- **Mobile View**: Touch-optimized interface with tab navigation (≤768px)

## 👥 User Roles & Authentication

### Student Features
- **Welcome Dashboard**: T-levels overview, progress tracking, achievement badges
- **Educational Content**: Access to podcasts and open day events
- **Gamification**: Progress bars, achievements, and learning milestones
- **Profile Management**: Account creation and login

### Admin Features
- **User Management**: View and manage student accounts
- **Content Upload**: Add podcasts and educational materials
- **Event Management**: Create and manage open day events
- **Analytics Dashboard**: Overview of system usage and engagement

### Demo Credentials
- **Admin Login**: 
  - Email: `admin@test.com`
  - Password: Any password (demo mode)
- **Student**: Can register new accounts or use demo login
- **Role-based Access**: Different dashboard experiences for students vs admins

### Student Dashboard
- **Podcasts Tab**: View and play available educational podcasts
- **Open Days Tab**: Browse upcoming open day events with dates and locations
- **Limited Access**: Students can only view content, not upload

### Admin Dashboard
- **Students Tab**: View all registered students with eligibility status
- **Podcasts Tab**: View all available podcasts
- **Open Days Tab**: View all scheduled open day events
- **Upload Podcast**: Form to add new educational podcasts
- **Add Open Day**: Form to schedule new open day events
- **Full Access**: Admins can view and create all content

## Project Structure

```
src/
├── components/
│   ├── AdminDashboard.jsx      # Admin-specific dashboard
│   ├── AuthForm.jsx            # Login/Signup forms
│   ├── Dashboard.jsx           # Main dashboard container
│   ├── LandingPage.jsx         # Role selection page
│   ├── OpenDayForm.jsx         # Admin form for adding events
│   ├── OpenDayList.jsx         # Display open day events
│   ├── PodcastList.jsx         # Display podcasts with play buttons
│   ├── PodcastUploadForm.jsx   # Admin form for uploading podcasts
│   ├── StudentDashboard.jsx    # Student-specific dashboard
│   └── UserList.jsx            # Admin view of registered students
├── context/
│   └── AppContext.jsx          # Global state management
├── App.jsx                     # Main app component
├── main.jsx                    # React entry point
└── index.css                   # Styling
```

## Data Models

### Users
- id, full_name, email, date_of_birth, is_eligible, role, created_at

### Podcasts
- id, title, description, url, uploaded_by, created_at

### Open Days
- id, event_name, description, date, location, created_by, created_at

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Demo Credentials

**Admin Login:**
- Email: admin@test.com
- Password: any password (this is a dummy prototype)

**Student Login/Signup:**
- Use any email address (no verification required)
- Any password will work
- Birth date determines eligibility (must be 16+)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technical Details

- **Framework**: React 18 with Vite
- **State Management**: React Context API
- **Routing**: Single-page application with conditional rendering
- **Styling**: CSS with responsive design
- **Authentication**: Dummy system (no real validation)
- **Data Storage**: In-memory (resets on page refresh)

## Notes

This is a **prototype/demo application** with the following limitations:
- No real backend integration
- No persistent data storage
- No real authentication/authorization
- No file upload functionality (URLs only)
- No real audio player integration

The focus is on demonstrating the UI/UX flow and component architecture for the different user roles and their respective functionalities.
