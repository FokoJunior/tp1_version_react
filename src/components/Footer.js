import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2025 Junior Dev Web. Tous droits réservés.</p>
        <div>
          <a href="#" className="text-white me-3">Facebook</a>
          <a href="#" className="text-white me-3">Twitter</a>
          <a href="#" className="text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;