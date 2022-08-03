import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from "styled-components"
import {NavLink} from 'react-router-dom'

import React from 'react'

const Category = () => {
  return (
    <div>
        {/* <NavLink to ={'/cuisine/Italian'}>  */}
        <div>
        <FaPizzaSlice/> 
        <h3> Italian </h3>
        {/* </NavLink> */}


        {/* <NavLink to ={'/cuisine/American'}>  */}

        <FaHamburger/>
        <h3> American </h3>
        {/* </NavLink> */}


        {/* <NavLink to ={'/cuisine/Thai'}>  */}

        <GiNoodles/> 
        <h3> Thai </h3>
        {/* </NavLink> */}


        {/* <NavLink to ={'/cuisine/Chinese'}>  */}
        <GiChopsticks/> 
        <h3> Chinese </h3>
        {/* </NavLink> */}
        </div>

    </div>
  )
}

export default Category