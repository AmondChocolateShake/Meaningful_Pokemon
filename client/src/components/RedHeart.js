import React from "react";

export default function RedHeart(){

  

  function ChangingRedHeart(){
    return true;
  }

  return (
    <div>
          <img onClick={ChangingRedHeart} src="https://github.com/AmondChocolateShake/Meaningful_Pokemon/assets/124133601/14fa8941-f4c0-4bfc-a752-f6276fc3169d" style={{ width: "25px", height: "25px"}}></img>

    </div>
  )

}