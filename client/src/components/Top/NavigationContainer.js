import React from 'react'
import SortAllPokemonButton from './SortAllPokemonButton'
import SortFavoritePokemonButton from './SortFavoritePokemonButton'
<<<<<<< HEAD
<<<<<<< HEAD
import SortOwnedPokemonButton from './SortOwnedPokemonButton'
=======
>>>>>>> a4ec19c (내비게이션 바 스타일링 중)
=======
import SortOwnedPokemonButton from './SortOwnedPokemonButton'
>>>>>>> 749ab15 (스타일링 완료)
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