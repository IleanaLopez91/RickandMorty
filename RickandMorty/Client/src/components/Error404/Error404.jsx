import React from 'react';
import style from "./Error404.module.css"

const Error404 = () => {
  return (
    <div className={style.wrapperError}>
        <div className={style.imagen}>
          <h2>PAGE NOT FOUND</h2>
          <img src='https://e0.pxfuel.com/wallpapers/756/616/desktop-wallpaper-rick-and-morty-rick-and-morty-rick-morty-rick-i-morty-weed.jpg' />
        </div>
    </div>
  )
}

export default Error404
