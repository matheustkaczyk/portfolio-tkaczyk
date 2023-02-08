import './App.scss'

import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'
import Tech from './pages/Tech'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
