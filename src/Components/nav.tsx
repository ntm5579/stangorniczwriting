import { Link } from 'react-router-dom'
import './Nav.css'
import { useState, useEffect } from 'react'
import { windowWidthThreshold } from '../constants';


function Nav({ currentPage }: { currentPage: string}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  
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
            <div className="nav-mobile-menu">
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
              {menuOpen && (
                <div className="mobile-menu">
                  <div>
                    <Link className={"nav-link" + (currentPage === "/" ? " active" : "")} to="/">About Me</Link>
                    <Link className={"nav-link" + (currentPage === "published-work" ? " active" : "")} to="/published-work">Published Work</Link>
                  </div>
                </div>
              )}
            </div>
          ) 
        }
      </nav>
  )
}

export default Nav