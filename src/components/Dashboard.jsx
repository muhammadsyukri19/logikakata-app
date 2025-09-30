// src/components/Dashboard.jsx
import React from "react";
import "./Dashboard.css"; // Import styling lokal

const Dashboard = ({ total, mastered, percentage }) => {
  return (
    <div className="dashboard">
      <h3>Dashboard Progres Belajar 📊</h3>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p>Total Kartu: **{total}**</p>
      <p>
        Telah Dikuasai: **{mastered}** ({percentage.toFixed(0)}%)
      </p>
      <p>Sisa Review: **{total - mastered}**</p>
    </div>
  );
};

export default Dashboard;
