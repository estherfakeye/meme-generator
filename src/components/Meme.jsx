import { useState, useEffect } from 'react'

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  
  const [allMemes, setAllMemes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

    // Fetch memes when component loads
  useEffect(() => {
    setIsLoading(true)
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
      setAllMemes(data.data.memes)
      setIsLoading(false)  
    })
    .catch(error => {
      console.error("Error fetching memes:", error)
      setIsLoading(false)  
    })
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
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">Loading memes...</p>
        </div>
      ) : (
         <>
          <form className="grid grid-cols-2 gap-3 sm-gap-4 mb-6">
            <input
              type="text"
              placeholder="Top text"
              className="border-2 border-gray-300 rounded px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-purple-500"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Bottom text"
              className="border-2 border-gray-300 rounded px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-purple-500"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
            <button 
              type="button"
              onClick={getMemeImage}
              className="col-span-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-3 rounded hover:to-purple-900 transition-all shadow-md"
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
                className="absolute top-4 sm:top-8 left-0 right-0 text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center px-2 sm:px-4"
                style={{
                  textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000'
                }}
              >
                {meme.topText}
              </h2>
            )}
            {meme.bottomText && (
              <h2 
                className="absolute bottom-8 left-0 right-0 text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center px-4 sm:px-4"
                style={{
                  textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000'
                }}
              >
                {meme.bottomText}
              </h2>
            )}
          </div>
         </>
        )}
      

    </div>
  )
}

export default Meme