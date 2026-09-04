import './Footer.css';

function Footer(){
  return (
    <footer className="footer">
      <p>Contact: <a href="mailto:sjgornicz@gmail.com">sjgornicz@gmail.com</a></p>
      <div className="organization-logos">
          <img height="75px" src="src/assets/organizationLogos/asja.png"></img>
          <img height="75px" src="src/assets/organizationLogos/awp.png"></img>
      </div>
    </footer>
  )
}

export default Footer