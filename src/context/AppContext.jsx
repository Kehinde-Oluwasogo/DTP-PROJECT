import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('homepage'); // 'homepage' | 'dashboard'
  const [users, setUsers] = useState([
    {
      id: '1',
      full_name: 'Admin User',
      email: 'admin@test.com',
      date_of_birth: '1990-01-01',
      is_eligible: true,
      role: 'admin',
      created_at: new Date().toISOString()
    }
  ]);

  const [podcasts, setPodcasts] = useState([
    {
      id: '1',
      title: 'Introduction to Programming',
      description: 'A beginner-friendly introduction to programming concepts',
      url: 'https://example.com/podcast1.mp3',
      uploaded_by: '1',
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      title: 'Web Development Basics',
      description: 'Learn the fundamentals of web development',
      url: 'https://example.com/podcast2.mp3',
      uploaded_by: '1',
      created_at: new Date().toISOString()
    }
  ]);

  const [userProgress, setUserProgress] = useState({});

  const [openDays, setOpenDays] = useState([
    {
      id: '1',
      event_name: 'Computer Science Open Day',
      description: 'Explore our computer science programs and facilities',
      date: '2025-08-15T10:00:00Z',
      location: 'Main Campus, Building A',
      created_by: '1',
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      event_name: 'Engineering Open Day',
      description: 'Discover engineering opportunities and labs',
      date: '2025-08-22T14:00:00Z',
      location: 'Engineering Building',
      created_by: '1',
      created_at: new Date().toISOString()
    }
  ]);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const checkEligibility = (birthDate) => {
    const age = calculateAge(birthDate);
    return age >= 16; // Assuming 16+ is eligible
  };

  const login = (email, password, role) => {
    // Dummy login - in real app, this would validate against backend
    const user = users.find(u => u.email === email);
    if (user && user.role === role) {
      // Ensure user has progress structure
      const userWithProgress = {
        ...user,
        progress: user.progress || {
          welcomeCompleted: false,
          sectionsCompleted: [],
          quizzesTaken: [],
          achievements: [],
          totalPoints: 0
        }
      };
      setCurrentUser(userWithProgress);
      return { success: true, user: userWithProgress };
    }
    
    // For demo purposes, create user if not exists
    if (role === 'student') {
      const newUser = {
        id: Date.now().toString(),
        full_name: email.split('@')[0],
        email,
        date_of_birth: '2000-01-01', // Default for demo
        is_eligible: true,
        role: 'student',
        created_at: new Date().toISOString(),
        progress: {
          welcomeCompleted: false,
          sectionsCompleted: [],
          quizzesTaken: [],
          achievements: [],
          totalPoints: 0
        }
      };
      setUsers(prev => [...prev, newUser]);
      setCurrentUser(newUser);
      return { success: true, user: newUser };
    }
    
    return { success: false, message: 'Invalid credentials' };
  };

  const register = (userData) => {
    const isEligible = checkEligibility(userData.date_of_birth);
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      is_eligible: isEligible,
      role: 'student',
      created_at: new Date().toISOString(),
      progress: {
        welcomeCompleted: false,
        sectionsCompleted: [],
        quizzesTaken: [],
        achievements: [],
        totalPoints: 0
      }
    };
    
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    return { success: true, user: newUser };
  };

  const updateUserProgress = (progressData) => {
    if (!currentUser) return;
    
    const updatedUser = {
      ...currentUser,
      progress: {
        ...currentUser.progress,
        ...progressData
      }
    };
    
    setCurrentUser(updatedUser);
    setUsers(prev => prev.map(user => 
      user.id === currentUser.id ? updatedUser : user
    ));
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addPodcast = (podcastData) => {
    const newPodcast = {
      id: Date.now().toString(),
      ...podcastData,
      uploaded_by: currentUser.id,
      created_at: new Date().toISOString()
    };
    setPodcasts(prev => [...prev, newPodcast]);
    return newPodcast;
  };

  const addOpenDay = (openDayData) => {
    const newOpenDay = {
      id: Date.now().toString(),
      ...openDayData,
      created_by: currentUser.id,
      created_at: new Date().toISOString()
    };
    setOpenDays(prev => [...prev, newOpenDay]);
    return newOpenDay;
  };

  const value = {
    currentUser,
    currentView,
    setCurrentView,
    users,
    userProgress,
    podcasts,
    openDays,
    login,
    register,
    logout,
    addPodcast,
    addOpenDay,
    checkEligibility,
    updateUserProgress
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
