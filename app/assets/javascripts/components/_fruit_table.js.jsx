const FruitTable = (props) => {
  
    return(
    	<table className="table">
    	<thead>
	    	<tr>
		    	<th scope="col">Name</th>
		    	<th scope="col">Description</th>
		    	<th scope="col">Type</th>
		    	<th scope="col">Action</th>
	    	</tr>
    	</thead>
		<AllFruits fruits={props.fruits} handleDelete={props.handleDelete} handleEdit={props.handleEdit} handleUpdate={props.handleUpdate} handleEditUpdate={props.handleEditUpdate}/>
		</table>
    );
}