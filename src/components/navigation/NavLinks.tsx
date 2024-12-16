import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  mobile?: boolean;
}

export default function NavLinks({ mobile = false }: NavLinksProps) {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/fashion', label: 'Fashion' },
    { to: '/travel', label: 'Travel' },
    { to: '/lifestyle', label: 'Lifestyle' },
    { to: '/about', label: 'About' },
  ];

  const baseStyles = mobile
    ? 'block px-4 py-2 text-gray-700 hover:bg-gray-50'
    : 'text-gray-700 hover:text-gray-900';

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={baseStyles}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}