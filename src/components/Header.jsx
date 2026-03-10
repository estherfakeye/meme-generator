import { useState } from "react";

import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-purple-900 text-white flex items-center justify-between h-16 px-6 mb-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-3">
        <span className="text-3xl">🎭</span>
        <h2 className="text-xl font-bold">Meme Generator</h2>
      </div>
      <h4 className="text-sm text-purple-200">React Project</h4>
    </header>
  )
}

export default Header 