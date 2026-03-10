import Meme from './components/Meme'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        <Meme />
      </div>
    </div>
  )
}

export default App

