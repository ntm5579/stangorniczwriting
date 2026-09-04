function Footer(){
  return (
    <footer style={{textAlign: 'center', padding: '1em', background: '#000'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <p style={{color: '#fff'}} >Contact: <a  style= {{color: '#fff'}} href="mailto:sjgornicz@gmail.com">sjgornicz@gmail.com</a></p>
            <div style={{display: 'inline-flex', gap: '1em', alignItems: 'center'}}>
                <img src="src/assets/organizationLogos/asja.png"></img>
                <img src="src/assets/organizationLogos/awp.png"></img>
            </div>
        </div>
    </footer>
  )
}

export default Footer