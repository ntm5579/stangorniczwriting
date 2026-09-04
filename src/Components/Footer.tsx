function Footer(){
  return (
    <footer style={{textAlign: 'center', padding: '1em', background: '#000'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <p>Contact: <a href="mailto:sjgornicz@gmail.com">sjgornicz@gmail.com</a></p>
            <div>
                <img src="src/assets/organizationLogos/asja.png"></img>
                <img src="src/assets/organizationLogos/awp.png"></img>
            </div>
        </div>
    </footer>
  )
}

export default Footer