import React from 'react';
import './Header.css'; // Impor file CSS untuk komponen Header

const Header = () => {
  return (
    <header className="header">
      <img src="/images/gambar1.jpeg" alt="Foto Profil" className="profile-img" />
      <div className="header-info">
        <h1>My CV</h1>
        <p>Nama: Ruben Inkiriwang</p>
        <p>Email: S22210208@gmail.com</p>
        <p>Telepon: +628981679154</p>
      </div>
    </header>
  );
}

export default Header;
