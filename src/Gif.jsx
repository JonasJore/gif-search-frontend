import React, { useState } from 'react'
import copy from 'copy-to-clipboard'

const LINK_COPIED_TO_CLIPBOARD_TEXT = "Copied to clipboard ✔️";
const msUntilCopiedTextDissappears = 3000;

const Gif = ({ index, url }) => {
  const [focused, setFocused] = useState(false)

  return (
    <div>
      <img
        className="p-2"
        key={index}
        alt="gif from response in giphy"
        src={url}
        onClick={() => {
          copy(url)
          setFocused(true)
          setTimeout(() => setFocused(false), msUntilCopiedTextDissappears)
        }}
      />
      {focused ? <p>{LINK_COPIED_TO_CLIPBOARD_TEXT}</p> : null}
    </div>
  )
}

export default Gif
