import {useEffect, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
      }


      useEffect(() => {
        getSearched(params.searched)
      },[])

  return (
    <div>Searched</div>
  )
}

export default Searched