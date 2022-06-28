import React from 'react'
import { Link } from 'gatsby';
import { useEffect } from 'react';

const Footer = ({ footer }) => {
  useEffect(() => {
    window.addEventListener('scroll', scrollToTop)

    return () => {
      window.removeEventListener('scroll', scrollToTop)
    };
  }, []);

  const scrollToTop = () => {
    const backToTop = document.getElementById('back-to-top')
    if (window !== undefined) {
      let windowHeight = window.scrollY

      if (windowHeight > 50) {
        backToTop.classList.add('bottom-[5%]')
        backToTop.classList.remove('bottom-[-50%]')
      } else {
        backToTop.classList.remove('bottom-[5%]')
        backToTop.classList.add('bottom-[-50%]')
      }
    }
  }

  return (
    <footer className='border-t-2 border-solid border-primary mt-40'>
      <div className='container grid gap-y-10 mb-24 md:grid-cols-2 pt-20'>
        <div className='w-4/6'>
          <Link to='/' className='mb-6 block'>
            <img src={footer.logo.url} alt="" className='h-16' />
          </Link>
          <p className='text-xl text-[#585C65] mb-10'>{footer.description}</p>
          <ul className='flex gap-7'>
            {footer.socialLinks.map((social) => (
              <li key={social.url}>
                <a href={social.url} dangerouslySetInnerHTML={{ __html: social.icon }} target="_blank" rel="noreferrer" className='w-12 h-12 rounded-full text-white bg-[#FF8049] text-3xl inline-flex items-center justify-center'></a>
              </li>
            ))}
          </ul>
        </div>
        <div className='grid gap-y-10 xs:grid-cols-3 '>
          {footer.column.map((col) => (
            <div key={col.title}>
              <strong className='text-xl text-[#40434A] mb-7 inline-block'>{col.title}</strong>
              <ul className='grid gap-y-6'>
                {col.lines.map((line, index) => (
                  <li key={index}>
                    <a href={line.url} target="_blank" className='text-[#70737C] text-lg' rel="noreferrer">{line.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <div className='bg-primary'>
        <p className='container text-xs py-5 text-white italic'>{footer.copyright}</p>
      </div>

      <a href="#" className='fixed text-white bg-[#FF8049] right-[5%] w-10 h-10 flex items-center justify-center rounded text-2xl transition-all duration-1000' id='back-to-top'><i className="ri-arrow-up-s-line"></i></a>
    </footer>
  )
}

export default Footer
