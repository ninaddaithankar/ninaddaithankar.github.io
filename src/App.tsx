import Header from './components/Header'
// import About from './components/About'
import Research from './components/Research'
import Publications from './components/Publications'
import Education from './components/Education'
import Experience from './components/Experience'
import Awards from './components/Awards'
import Misc from './components/Misc'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      {/* <About /> */}
      {/* <Research /> */}
      <Experience />
      <Publications />
      <Education />
      {/* <Awards /> */}
      <Misc />
      <Footer />
    </div>
  )
}

export default App
