import React, { useCallback, useState } from "react";
import BlackHeart from "./BlackHeart";
import RedHeart from "./RedHeart";

export default function SwichingHeart() {

  const [favorite, setFavorite] = useState(false)


  function ColorSwitchingHeart() {
    setFavorite(true);
  }

  return (
    <div>
      <BlackHeart />
      <RedHeart />
    </div>
  )

} 