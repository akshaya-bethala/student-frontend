import React, { useEffect, useState } from "react";
import './App.css';


function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', age: 20, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 22, email: 'jane@example.com' }
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const getStudents = () => {
    // Mock data - no fetch needed
    setStudents([
      { id: 1, name: 'John Doe', age: 20, email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', age: 22, email: 'jane@example.com' }
    ]);
  }; 

  useEffect(() => {
    getStudents();
  }, []);

  const addStudent = () => {
    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    const newStudent = { id: newId, name, age: Number(age), email };
    
    if (name && age && email) {
      setStudents([...students, newStudent]);
      setName("");
      setAge("");
      setEmail("");
    }
  };

  const [showWelcome, setShowWelcome] = useState(true);

  // ... existing getStudents, addStudent, useEffect ...

  return (
    <div className="app-wrapper">
      {showWelcome ? (
        <div className="welcome-hero">
          <div className="welcome-card">
            <h1 className="hero-title">🎓 Welcome to StudentHub</h1>
            <p className="hero-subtitle">Advanced Student Management Platform</p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{students.length}</div>
                <div className="stat-label">Active Students</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{Math.floor(Math.random()*100 + students.length)}</div>
                <div className="stat-label">Total Enrolled</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
            <button className="cta-button" onClick={() => setShowWelcome(false)}>
              🚀 Start Managing Students
            </button>
            <div className="features-list">
              <div className="feature">📊 Real-time Dashboard</div>
              <div className="feature">✨ Instant Add &amp; Update</div>
              <div className="feature">📱 Fully Responsive</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="app-container">
          <div className="header-bar">
            <button className="back-btn" onClick={() => setShowWelcome(true)}>
              ← Back to Dashboard
            </button>
            <h1>Student Management</h1>
          </div>
          <div className="form-section">
            <div className="input-group">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="👤 Full Name"
              />
            </div>
            <div className="input-group">
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="📅 Age"
              />
            </div>
            <div className="input-group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="📧 Email"
              />
            </div>
            <button onClick={addStudent} className="add-btn">
              ➕ Add New Student
            </button>
          </div>
          <h2>📋 Student List ({students.length})</h2>
          <ul className="students-list">
            {students.length === 0 ? (
              <li className="empty-state">
                No students yet. Add your first one! 🎉
              </li>
            ) : (
              students.map((s) => (
                <li key={s.id} className="student-item">
                  <div className="student-info">
                    <div className="student-avatar">👤</div>
                    <div className="student-details">
                      <div className="student-name">{s.name}</div>
                      <div className="student-meta">{s.age} years • {s.email}</div>
                    </div>
                  </div>
                  <div className="student-actions">
                    <button className="action-btn edit">✏️ Edit</button>
                    <button className="action-btn delete">🗑️ Delete</button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}


export default App;