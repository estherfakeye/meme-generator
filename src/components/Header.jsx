import { useState } from "react";

import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 sm:py-5px-4 px-6 shadow-lg">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-2xl sm:text-4xl">🎭</span>
          <h1 className="text-xl sm:text-3xl font-bold"> Meme Forge</h1>
        </div>
      </div>
    </header>
  )
}

export default Header 