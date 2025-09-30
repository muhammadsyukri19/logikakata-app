// src/components/LandingPage.jsx (Pastikan TIDAK ADA TANDA KUTIP TERBALIK yang salah)
import React from "react";
import "./LandingPage.css";

const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-container">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="title-logo">LogikaKata 💡</h1>
          <p className="subtitle">
            Tingkatkan Daya Ingat Anda. Kuasai Konsep Inti Sejarah dan Bahasa
            SMA dengan Review Interaktif Terstruktur.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <h3>Akses Cepat</h3>
              <p>
                Materi inti mata pelajaran non-eksakta disajikan dalam format
                kartu yang ringkas.
              </p>
            </div>
            <div className="feature-item">
              <h3>Review Pintar</h3>
              <p>
                Lacak kartu mana yang sudah dikuasai dan mana yang perlu diulang
                (Need Review).
              </p>
            </div>
            <div className="feature-item">
              <h3>Visual Progres</h3>
              <p>
                Lihat kemajuan belajar Anda secara real-time di dashboard yang
                informatif.
              </p>
            </div>
          </div>

          <button className="btn-start" onClick={onStart}>
            Mulai Sesi Belajar &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
