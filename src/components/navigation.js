
import { Link } from 'gatsby';
import * as React from 'react'
import { useEffect } from 'react';

const Navigation = ({ navigation = {} }) => {
  const { logo, link } = navigation

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground);

    return () => {
      window.removeEventListener('scroll', changeNavBackground);
    };
  }, []);

  const changeNavBackground = () => {
    const nav = document.getElementById('nav')
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? nav.classList.add('bg-primary', 'shadow-xl') : nav.classList.remove('bg-primary', 'shadow-xl')
    }
  };

  const toggleNavBar = () => {
    const menu = document.getElementById('menu')
    const navToggle = document.getElementById('nav-toggle')
    if (menu.classList.contains('top-[-999px]')) {
      navToggle.classList.add('rotate-90')

      menu.classList.remove('top-[-999px]')
      menu.classList.add('top-full')
    } else {
      navToggle.classList.remove('rotate-90')

      menu.classList.add('top-[-999px]')
      menu.classList.remove('top-full')
    }
  }

  return (
    <nav className="container py-4 px-3 flex justify-between h-24 items-center top-0 left-0 right-0 z-50 fixed" id='nav'>
      <span className='absolute -left-96 bg-primary -right-96 h-full -z-10'></span>
      <Link to='/'><img src={logo.url} alt="" /></Link>
      <ul className='flex flex-wrap flex-col absolute -z-10 top-[-999px] right-0 gap-5 shadow-lg bg-[rgba(56,63,80,0.8)] py-5 w-full text-right transition-all duration-300 container md:static md:bg-transparent md:shadow-none md:flex-row md:justify-end' id='menu'>
        {link.links.map((l, index) => (
          <li key={index} className="">
            <a href={l.href} className='text-white border-b-2 md:border-none'>{l.name}</a>
          </li>
        ))}
      </ul>

      <i className="ri-menu-line text-2xl transition-all duration-300 md:hidden" onClick={toggleNavBar} id="nav-toggle"></i>
    </nav>
  )
}
export default Navigation