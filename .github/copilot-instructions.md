<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a React application for a Student/Admin Dashboard system with the following features:

## Project Structure
- Uses React with Vite as the build tool
- Context API for state management (no Redux needed)
- Dummy authentication system (no real backend validation required)
- Two user roles: Student and Admin with different dashboards

## Key Components
- **LandingPage**: Role selection (Student/Admin login)
- **AuthForm**: Login/Signup forms with dummy validation
- **Dashboard**: Main container that renders different dashboards based on user role
- **StudentDashboard**: Limited access to podcasts and open days
- **AdminDashboard**: Full access including user management and content upload
- **PodcastList**: Displays available podcasts with play functionality
- **OpenDayList**: Shows upcoming open day events
- **UserList**: Admin-only view of registered students
- **PodcastUploadForm**: Admin-only podcast upload
- **OpenDayForm**: Admin-only open day event creation

## Data Structure
- Users: id, full_name, email, date_of_birth, is_eligible, role, created_at
- Podcasts: id, title, description, url, uploaded_by, created_at
- OpenDays: id, event_name, description, date, location, created_by, created_at

## Authentication Rules
- Students can login or signup (dummy validation)
- Admins can only login (predefined admin account)
- Age eligibility check based on date_of_birth (16+ eligible)
- No real password validation - this is a prototype

## Styling
- Uses CSS classes defined in index.css
- Responsive design with cards and tabs
- Color-coded status indicators
- Form validation styling
