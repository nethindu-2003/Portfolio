import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span id="yearText">© {currentYear} Nethindu Chandula</span>
      <span>Designed and built with intention</span>
    </footer>
  );
}
