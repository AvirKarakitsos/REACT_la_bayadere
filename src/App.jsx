import './App.scss'
import Header from './components/Header.jsx'
import Choreographer from './components/Choreographer.jsx'
import Composer from './components/Composer.jsx'
import Nikiya from './components/Nikiya.jsx'
import Color from './components/Color.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
      <>
        <Header/>
        <main>
          <Choreographer/>
          <Composer/>
          <Nikiya/>
          <Color/>
          <Gallery/>
        </main>
        <Footer/>
      </>
  )
}

export default App
