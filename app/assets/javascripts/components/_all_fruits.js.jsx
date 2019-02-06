const AllFruits = (props) => {

  var fruits = props.fruits.map((fruit) => {
    return(
       <Fruit key={fruit.id} fruit={fruit} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
    )
  })

  return(
      <tbody>
        {fruits}
      </tbody>
    )
}