import './App.scss'
import Header from './components/Header.jsx'
import Choreographer from './components/Choreographer.jsx'
import Composer from './components/Composer.jsx'
import Nikiya from './components/Nikiya.jsx'
import Color from './components/Color.jsx'

function App() {
  return (
      <main>
        <Header/>
        <Choreographer/>
        <Composer/>
        <Nikiya/>
        <Color/>
        <div className="container">
          <h2>Test</h2>
        </div>
      </main>
  )
}

export default App
