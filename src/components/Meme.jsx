import { useState, useEffect } from 'react'

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  
  const [allMemes, setAllMemes] = useState([])

    // Fetch memes when component loads
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Top text"
          className="border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
          name="topText"
          value={meme.topText}
           onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
          type="button"
          onClick={getMemeImage}
          className="col-span-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 rounded hover:from-purple-700 hover:to-blue-600"
        >
          Get a new meme image 🖼️
        </button>
      </form>

      <div className="relative">
        <img 
          src={meme.randomImage} 
          alt="Meme" 
          className="w-full rounded"
        />
        {meme.topText && (
          <h2 
            className="absolute top-8 left-0 right-0 text-white text-3xl sm:text-4xl font-bold uppercase text-center px-4"
            style={{
              textShadow: '3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 0 3px 0 #000, 3px 0 0 #000, 0 -3px 0 #000, -3px 0 0 #000'
            }}
          >
            {meme.topText}
          </h2>
        )}
        {meme.bottomText && (
          <h2 
            className="absolute bottom-8 left-0 right-0 text-white text-3xl sm:text-4xl font-bold uppercase text-center px-4"
            style={{
              textShadow: '3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 0 3px 0 #000, 3px 0 0 #000, 0 -3px 0 #000, -3px 0 0 #000'
            }}
          >
            {meme.bottomText}
          </h2>
        )}
      </div>
    </div>
  )
}

export default Meme