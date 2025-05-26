import { useState, useEffect } from 'react'
import { links } from '../constants/urls'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Effect to toggle no-scroll class on body when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('no-scroll');

      const bookingElement = document.getElementById('hr-widget');

      if (bookingElement) {
        bookingElement.style.opacity = isMenuOpen ? '1' : "0";
      }
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`sticky-header fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      id="header"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className={`text-3xl font-['Pacifico'] my-font ${isScrolled ? 'text-black' : 'text-white'
          }`}>AT Relax House</a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map(link => {
            return (
              <a
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(link.href.replace('#', ''));

                  if (element) {
                    // Прокручиваем к элементу
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                key={link.title}
                href={link.href}
                className={`${isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-sand'
                  } transition-colors`}
              >
                {link.title}
              </a>
            )
          })}
        </div>

        {/* Burger Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-black' : 'bg-white'} mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></div>
          <div className={`w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-black' : 'bg-white'} mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
            }`}></div>
          <div className={`w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-black' : 'bg-white'} transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {links.map(link => (
            <a
              key={link.title}
              href={link.href}
              className="text-black text-xl hover:text-gray-600 transition-colors"
              onClick={(e) => {
                setIsMenuOpen(false);

                e.preventDefault()
                const element = document.getElementById(link.href.replace('#', ''));

                if (element) {
                  // Прокручиваем к элементу
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
              }
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header;