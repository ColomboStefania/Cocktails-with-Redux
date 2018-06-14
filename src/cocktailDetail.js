import * as React from 'react'

export default function CocktailsDetails(props) {
  const cocktail = props.cocktail
  return (
    <div>
    <h2>{ cocktail.category }</h2>
    <p>
      <i>{ cocktail.instructions }</i>
    </p>
    <img src={cocktail.thumbnail} alt="gg" />
    </div>);
}
