import React, { useCallback, useEffect, useState } from "react";
import BlackHeart from "./BlackHeart";
import RedHeart from "./RedHeart";

export default function SwichingHeart() {

  const [isFavorite, setFavorite] = useState(false)


  function handleSwitchingHeart() {
    setFavorite(true);
  }

  useEffect(() => {

  })

  return (
    <div onClick={}>
      {isFavorite ? (
        <RedHeart />) :
        (<BlackHeart />
        )}
    </div>
  )

} 