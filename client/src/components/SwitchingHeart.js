import React, { useEffect, useState } from "react";
import BlackHeart from "./BlackHeart";
import RedHeart from "./RedHeart";
import './SwitchingHeart.css'

export default function SwitchingHeart(props) {

  const [isFavorite, setFavorite] = useState(false)

  useEffect(() => {
    console.log(props)
    setFavorite(props.favorite)
  }, [])

  function handleSwitchingHeart() {

    if (isFavorite) {
      console.log("like it",)
      setFavorite(false)
    }
    else {
      setFavorite(true);
    }
  }

  return (
    <div className="HeartPositionCss" onClick={handleSwitchingHeart}>
      {isFavorite ? (
        <RedHeart />) :
        (<BlackHeart />
        )}
    </div>
  )

} 