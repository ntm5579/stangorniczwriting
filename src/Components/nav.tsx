import { Link } from 'react-router-dom'
import './nav.css'
function Nav() {
    return (
        <nav>
          <Link className="stan nav-link" to="/">Stan Gornicz</Link>
          <Link className="nav-link" to="/">About Me</Link>
          <Link className="nav-link"to="/published-work">Published Work</Link>
        </nav>
    )
}

export default Nav