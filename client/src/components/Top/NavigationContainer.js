import React from 'react'
import SortAllPokemonButton from './SortAllPokemonButton'
import SortFavoritePokemonButton from './SortFavoritePokemonButton'
<<<<<<< HEAD
import SortOwnedPokemonButton from './SortOwnedPokemonButton'
=======
>>>>>>> a4ec19c (내비게이션 바 스타일링 중)
import './NavigationContainer.css'

export default function NavigationContainer() {

  return (
    <div className='NavigationContainerCss'>
      <SortAllPokemonButton/>
      <SortFavoritePokemonButton/>
      <SortOwnedPokemonButton/>
    </div>
  )

}