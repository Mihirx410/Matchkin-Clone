import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import ForClientsSection from './components/ForClientsSection'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <div>
       <Header/>
       <Hero/>
       <ForClientsSection/>
       <About/>
       <Footer/>
      </div>
    </>
  )
}

export default App
