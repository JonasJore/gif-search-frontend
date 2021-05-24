import React from 'react'
import PropTypes from 'prop-types'

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

  if (gifs.length !== 0) {
    return (
      <div className="flex x-sm:flex-col flex-row flex-wrap justify-center mt-4 bg-yellow-400">
        {
          gifs.map((gif, index) =>
            <img
              className="p-2"
              key={index}
              alt="gif from response in giphy"
              src={gif.images.fixed_height.url}
            />)
        }
      </div>
    )
  }

  return null
}

RenderGifs.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  gifs: PropTypes.array.isRequired
}

export default RenderGifs;
