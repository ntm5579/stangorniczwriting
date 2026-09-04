import './Footer.css';
import asja from '../assets/organizationLogos/asja.png';
import awp from '../assets/organizationLogos/awp.png';

function Footer(){
  return (
    <footer className="footer">
      <p>Contact: <a href="mailto:sjgornicz@gmail.com">sjgornicz@gmail.com</a></p>
      <div className="organization-logos">
          <img height="75px" src={asja}></img>
          <img height="75px" src={awp}></img>
      </div>
    </footer>
  )
}

export default Footer