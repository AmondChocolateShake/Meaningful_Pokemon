import React, { useCallback, useEffect, useState } from "react";
import BlackHeart from "./BlackHeart";
import RedHeart from "./RedHeart";

export default function SwitchingHeart() {

  const [isFavorite, setFavorite] = useState(false)


  function handleSwitchingHeart() {

    if (isFavorite) {
      setFavorite(false)
    }
    else {
      setFavorite(true);
    }
  }

  return (
    <div style={{ cursor: "pointer" }} onClick={handleSwitchingHeart}>
      {isFavorite ? (
        <RedHeart />) :
        (<BlackHeart />
        )}
    </div>
  )

} 