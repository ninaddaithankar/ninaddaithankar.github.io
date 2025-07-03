import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
// import About from './components/About'
// import Research from './components/Research'
import Publications from './components/Publications'
import Education from './components/Education'
import Experience from './components/Experience'
// import Awards from './components/Awards'
import Misc from './components/Misc'
import Footer from './components/Footer'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'
import MinimalArt from './components/MinimalArt'

function App() {
  return (
    <div className="container">
      <MinimalArt />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            {/* <About /> */}
            {/* <Research /> */}
            <Experience />
            <Publications />
            <Education />
            {/* <Awards /> */}
            <Misc />
            <Footer />
          </>
        } />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  )
}

export default App
