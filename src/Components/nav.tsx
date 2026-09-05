import { Link } from 'react-router-dom'
import './Nav.css'
import { useState, useEffect, useRef } from 'react'
import { windowWidthThreshold } from '../constants';


function Nav({ currentPage }: { currentPage: string}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  
  return (
      <nav>
        {windowWidth > windowWidthThreshold ? (
          <>
            <Link className="stan nav-link" to="/">Stan Gornicz</Link>
            <div className="right-nav">
              <Link className={"nav-link" + (currentPage === "/" ? " active" : "")} to="/">About Me</Link>
              <Link className={"nav-link" + (currentPage === "published-work" ? " active" : "")} to="/published-work">Published Work</Link>
            </div>
          </>
          ) : (
            <div ref={mobileMenuRef} className={`nav-mobile-menu${menuOpen ? ' menu-open' : ''}`}>
              <div className="mobile-menu-header">
                <button 
                  className="nav-button"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  ☰
                </button>
                <Link className="stan nav-link" to="/">Stan Gornicz</Link>
              </div>
              <div className="mobile-menu">
                <div>
                  <Link className={"nav-link" + (currentPage === "/" ? " active" : "")} to="/">About Me</Link>
                  <Link className={"nav-link" + (currentPage === "published-work" ? " active" : "")} to="/published-work">Published Work</Link>
                </div>
              </div>
            </div>
          ) 
        }
      </nav>
  )
}

export default Nav