// import {React} from 'react.js'
// var edit_fruits = require("./edit_fruits");
class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fruits: [],
      single_fruit: {}
    };
    // this.single_fruit = {};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewFruit = this.addNewFruit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteFruit = this.deleteFruit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFruit = this.updateFruit.bind(this);
    this.handleEditUpdate = this.handleEditUpdate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    // this.edit_fruits = EditFruit;
   }

  handleFormSubmit(name, description, fruit_type){
    let body = JSON.stringify({fruit: {name: name, description: description, fruit_type: fruit_type} })

    fetch(`${window.location.href}api/v1/fruits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((fruit)=>{
      this.addNewFruit(fruit);
      $('#exampleModal').modal('toggle');
    })
  }

  addNewFruit(fruit){
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  }

  handleDelete(id){
    fetch(`${window.location.href}api/v1/fruits/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
      this.deleteFruit(id)
    })
  }

  handleEdit(id){
    newFruits = this.state.fruits.filter((fruit) => fruit.id === id)
    // this.state.single_fruit = newFruits;
    google = {}
    // this.edit_fruits = this.setState({fruit:google});
    // this.edit_fruits.method(newFruits[0])
    $('#editexampleModal').modal('toggle');
  }

  deleteFruit(id){
    newFruits = this.state.fruits.filter((fruit) => fruit.id !== id)
    this.setState({ fruits: newFruits })
  }
  
  handleEditUpdate(fruittemp){
    let name = fruittemp.name.value
    let description = fruittemp.description.value
    let fruit_type = fruittemp.fruit_type.value
    let id = fruittemp.id
    let fruitop = {id: id, name: name, description: description, fruit_type: fruit_type}
    this.handleUpdate(fruitop)
  }

  handleUpdate(fruit){
    fetch(`${window.location.href}api/v1/fruits/${fruit.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({fruit: fruit}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateFruit(fruit);
      })
  }

  updateFruit(fruit){
    let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
    newFruits.push(fruit)
    this.setState({ fruits: newFruits })
  }

  componentDidMount(){
    fetch('/api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });
  }

  render(){
    return(
      <div>
        <EditFruit handleFormSubmit={this.handleFormSubmit} />
        <NewFruit handleFormSubmit={this.handleFormSubmit} />
        <FruitTable fruits={this.state.fruits} handleDelete={this.handleDelete} handleEdit={this.handleEdit} handleUpdate={this.handleUpdate} handleEditUpdate={this.handleEditUpdate}/>
      </div>
    )
  }
}
