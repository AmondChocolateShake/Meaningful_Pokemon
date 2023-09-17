import React from 'react'
import SortAllPokemonButton from './SortAllPokemonButton'
import SortFavoritePokemonButton from './SortFavoritePokemonButton'
import SortOwnedPokemonButton from './SortOwnedPokemonButton'
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