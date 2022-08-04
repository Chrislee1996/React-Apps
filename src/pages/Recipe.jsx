import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

const Recipe = () => {

  let params = useParams()

  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData)
    // console.log(detailData.extendedIngredients)
  }

  useEffect(()=> {
    fetchDetails()
  },[params.name])


  return (
    <div>
    <h3>{details.title}</h3>

    <img src ={details.image} alt ={details.title} />
      <hr/>

      <div>
        <h2>Instructions</h2>
        <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
      </div>

      <div>
        <h2>Recipe Summary</h2>
        <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
      </div>

    </div>
  )
}

export default Recipe