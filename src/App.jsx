import Meme from './components/Meme'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Meme Generator
        </h1>
        <Meme />
      </div>
    </div>
  )
}

export default App

