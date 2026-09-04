import { Link } from 'react-router-dom'
import './nav.css'
function Nav({ currentPage }: { currentPage: string }) {
    return (
        <nav>
          <Link className="stan nav-link" to="/">Stan Gornicz</Link>
          <Link className={"nav-link" + (currentPage === "/" ? " active" : "")} to="/">About Me</Link>
          <Link className={"nav-link" + (currentPage === "published-work" ? " active" : "")} to="/published-work">Published Work</Link>
        </nav>
    )
}

export default Nav