import React from "react"
import PropTypes from "prop-types"
import Fruit from "./Fruit"
const AllFruits = (props) => {

  var fruits = props.fruits.map((fruit) => {
    return(
       <Fruit key={fruit.id} fruit={fruit} handleDelete={props.handleDelete} handleEdit={props.handleEdit} handleUpdate={props.handleUpdate} handleEditUpdate={props.handleEditUpdate}/>
    )
  })

  return(
      <tbody>
        {fruits}
      </tbody>
    )
}
export default AllFruits