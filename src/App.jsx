import './App.scss'

import Header from './components/Header'
import Video from './components/Video'

import Home from './pages/Home'
import About from './pages/About'
import Tech from './components/Tech'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Video />
        <Home />
        <About />
        <Tech />
        <Contact />
      </main>
    </div>
  )
}

export default App
