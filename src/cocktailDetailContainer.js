import * as React from 'react'
import { connect } from 'react-redux'
import CocktailsDetails from './cocktailDetail'

class CocktailDetailsContainer extends React.PureComponent {
  render() {
    const cocktail = this.props.cocktail
    if (!cocktail) return null

    return <CocktailsDetails cocktail={cocktail} />
  }
}

const mapStateToProps = (state) => {
  if (state.selectedCocktail !== null) {
    return {
      cocktail: state.cocktails.find(cocktail => cocktail.id === state.selectedCocktail)
    }
  }
  return {}
}

export default connect(mapStateToProps)(CocktailDetailsContainer)
