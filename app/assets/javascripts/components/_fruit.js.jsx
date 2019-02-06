class Fruit extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
   if(this.state.editable){
      let name = this.name.value
      let description = this.description.value
      let fruit_type = this.fruit_type.value
      let id = this.props.fruit.id
      let fruit = {id: id, name: name, description: description, fruit_type: fruit_type}
      this.props.handleUpdate(fruit)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  
  render(){
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.fruit.name}/>:<h3>{this.props.fruit.name}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.fruit.description}/>:<p>{this.props.fruit.description}</p>
    let fruit_type = this.state.editable ? <input type='text' ref={input => this.fruit_type = input} defaultValue={this.props.fruit.fruit_type}/>:<p>{this.props.fruit.fruit_type}</p>
    return(
      <tr>
         <td> {name} </td>
         <td> {description} </td>
         <td> {fruit_type} </td>
         <td> 
          <button onClick={() => this.handleEdit()} className="btn btn-success btn-sm float-left">{this.state.editable? 'Submit' : 'Edit'}</button>
          <button onClick={() => this.props.handleDelete(this.props.fruit.id)} className="btn btn-danger btn-sm float-right">Delete</button>
         </td>
      </tr>
    )      
  }
}


