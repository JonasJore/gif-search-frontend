import React from 'react'
import PropTypes from 'prop-types'
import Gif from './Gif';

const RenderGifs = ({ isLoading, gifs }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center p-2 mt-4 bg-yellow-400">
        <img
          alt="loading gif"
          src="https://media1.giphy.com/media/l0HUpt2s9Pclgt9Vm/200.gif?cid=975e40b7ieggw372fnf7akuy61dpbdoeeyi1lb2y8nney0ae&rid=200.gif"
        />
      </div>
    )
  }

  if (gifs?.length == 0) {
    return (
      <div className="flex flex-col w-2/4 justify-center p-2 mt-4 m-auto bg-yellow-400">
        <h2>No gifs found 😔</h2>
        <img
          alt="no gifs found"
          src="https://media1.giphy.com/media/kzxOVNpKLWDyL9tTTn/200.gif?cid=975e40b7zztai6rdxfp6fs8rp5ycl5slnwdlk29r1tnxpw3a&rid=200.gif"
        />
      </div>
    )
  }

  if (gifs !== null && gifs.length !== 0) {
    return (
      <div className="flex x-sm:flex-col flex-row flex-wrap justify-center mt-4 bg-yellow-400">
        {
          gifs.map((gif, index) =>
            <Gif index={index} url={gif.images.fixed_height.url} key={index} />
          )
        }
      </div>
    )
  }

  return null
}

RenderGifs.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  gifs: PropTypes.array
}

export default RenderGifs;
