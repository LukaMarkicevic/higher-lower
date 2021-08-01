import React from 'react'

function Header() {
    return (
        <div className="flex shadow-sm p-4 text-center justify-between">
      <div className="flex">
        <a href="https://github.com/LukaMarkicevic/recipe-app">
          <img
            className="w-5 h-5 mt-1"
            src={`${process.env.PUBLIC_URL}/assets/logo/github.png`}
            alt="PICTURE MISSING"
          />
        </a>
        <label className="ml-2">higer-lower</label>
      </div>
      
      <div className="flex">
        <label className="mr-2">Luka Markićević</label>
        <a href="https://www.linkedin.com/in/lukamarkicevic1/">
          <img 
            className="w-5 h-5 mt-1"
            src={`${process.env.PUBLIC_URL}/assets/logo/linkedin.png`}
            alt="PICTURE MISSING"
          />
        </a>
      </div>
    </div>
    )
}

export default Header
