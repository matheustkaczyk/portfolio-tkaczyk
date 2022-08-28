import './App.scss'

import Header from './components/Header'
import Video from './components/Video'

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Video />
        <Home />
        <About />
      </main>
    </div>
  )
}

export default App
