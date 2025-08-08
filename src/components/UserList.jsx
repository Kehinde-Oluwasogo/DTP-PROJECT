import React from 'react';
import { useAppContext } from '../context/AppContext';

const UserList = () => {
  const { users } = useAppContext();

  const studentUsers = users.filter(user => user.role === 'student');

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

  return (
    <div>
      <h3>Registered Students</h3>
      <div style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
        Total Students: {studentUsers.length}
      </div>
      
      <div className="user-list">
        {studentUsers.map(user => (
          <div key={user.id} className="user-card">
            <h4>{user.full_name}</h4>
            <div style={{ marginTop: '10px' }}>
              <strong>📧 Email:</strong> {user.email}
            </div>
            <div style={{ marginTop: '5px' }}>
              <strong>🎂 Age:</strong> {calculateAge(user.date_of_birth)} years old
            </div>
            <div style={{ marginTop: '5px' }}>
              <strong>✅ Eligible:</strong> 
              <span style={{ 
                color: user.is_eligible ? 'green' : 'red',
                marginLeft: '5px'
              }}>
                {user.is_eligible ? 'Yes' : 'No'}
              </span>
            </div>
            <div style={{ marginTop: '5px', fontSize: '12px', color: '#666' }}>
              Registered: {new Date(user.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
        {studentUsers.length === 0 && (
          <p>No students have registered yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
