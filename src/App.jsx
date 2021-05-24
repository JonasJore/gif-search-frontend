import React, { useState } from 'react'
import RenderGifs from './RenderGifs'

const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&limit=25&q=`

function App() {
  const [searchKeyword, setSearchkeyword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    fetchGifs(searchKeyword)
  }

  const fetchGifs = async (keyword) => {
    const searchUrl = `${API_URL}${keyword}`
    await fetch(searchUrl)
      .then(response => response.json())
      .then(gifs => {
        setResults(gifs.data)
        setIsLoading(false)
      })
  }

  return (
    <div className="flex flex-col text-center bg-yellow-400 h-screen">
      <h1 className="text-3xl x-sm:text-2xl sm:text-4xl md:text-5xl lg:text-6xl m-4 p-2"> Find your new fav😮rite gif!😎</h1>
      <div className="gif-search-form">
        <form className="flex flex-row justify-center m-1 mt-3">
          <div className="searchBox">
            <input type="text" className="border py-2 px-3 text-grey-darkest" onChange={(e) => setSearchkeyword(e.target.value)} />
          </div>
          <div className="searchButton">
            <button type="submit" alt="gif-search-button" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={(e) => handleSubmit(e)}>Search them gifs</button>
          </div>
        </form>
      </div>
      <RenderGifs isLoading={isLoading} gifs={results} />
    </div>
  )
}

export default App
