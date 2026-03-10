import Meme from './components/Meme'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        <Meme />
      </div>
    </div>
  )
}

export default App

