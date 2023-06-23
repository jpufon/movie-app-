import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</p>
        <p>
          Made with <span className="text-danger">&hearts;</span> by Jordan Pufon 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
