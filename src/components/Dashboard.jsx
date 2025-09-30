// src/components/Dashboard.jsx (Modifikasi)
import React from "react";
import "./Dashboard.css";

const Dashboard = ({ total, mastered, percentage }) => {
  const needsReview = total - mastered;

  return (
    <div className="dashboard">
      <h3>Dashboard Progres Belajar 📊</h3>

      <p>Penyelesaian Sesi: **{percentage.toFixed(0)}%**</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <p>Total Kartu</p>
          <strong>{total}</strong>
        </div>
        <div className="stat-item mastered">
          <p>Telah Dikuasai</p>
          <strong>{mastered}</strong>
        </div>
        <div className="stat-item review">
          <p>Perlu Diulang</p>
          <strong>{needsReview}</strong>
        </div>
        <div className="stat-item">
          <p>Progres %</p>
          <strong>{percentage.toFixed(1)}%</strong>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
