import Nav from './Components/Nav'
import './App.css'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Nav currentPage="/" />
      <div className="page-shell">
        {/* <div className="section">
          <img src="src/assets/typewriter.png" alt="Type Writer" />
        </div> */}
        <div className="about-me-section">
          <div className="about-me-header">
            <img style={{height: '25vh'}} src="src/assets/headshot.png" alt="Stan Gornicz" />
            <h1>Stan Gornicz</h1>
          </div>

          <h1 style={{ justifyContent: 'center', display: 'flex' }}>About Me</h1>
          <p className="about-me-paragraph">
            I've been a writer my whole life. For most of my career, I've been a corporate writer.
            For the past decade and a half, I've crafted personal essays, which I've published in
            national publications. I've had the good fortune of being welcomed into several writing
            groups in New York City where my writing coaches and many accomplished writers,
            now friends, have helped me shape my ideas into wonderful stories. My proudest
            accomplishment has been approaching the finish line on my memoir, a collection of
            family essays. There are surprises, no doubt, and a life-altering realization that the
            unexpected can be the most joyful outcome.
          </p>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
