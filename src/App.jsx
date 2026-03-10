import Meme from './components/Meme'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-black">
      
        <Header />
        <div className="max-w-2xl mx-auto px-4 py-8">
        <Meme />
      </div>
    </div>
  )
}

export default App

