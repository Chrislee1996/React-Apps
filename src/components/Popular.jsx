import {useEffect, useState} from 'react'
import env from 'react-dotenv'

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(()=> {
        getPopular()
    },[])
        
    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json()
        // console.log(data,'here is our data')
        setPopular(data.recipes) 
    }


  return (
    <div>
        Popular
        {popular.map((recipe) => {
            return (
                <div>
                    <p>{recipe.title}</p>
                </div>
            )
        })}

    </div>
  )
}

export default Popular