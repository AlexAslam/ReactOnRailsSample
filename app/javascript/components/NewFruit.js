import React from "react"
import PropTypes from "prop-types"
const NewFruit = (props) => {
  
    let formFields = {}
 
    return(
    	<div>
    	<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">New Fruit</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		        <div className="form">
					<div className="form-group">
					    <label htmlFor="name_label">Name</label>
					    <input ref={input => formFields.name = input} placeholder='Enter the name of the item' className="form-control" name="name_label"/>
					</div>
					<div className="form-group">
					    <label htmlFor="description_label">Description</label>
					    <input ref={input => formFields.description = input} placeholder='Enter a description' className="form-control" name="description_label"/>
					</div>
					<div className="form-group">
					    <label htmlFor="fruit_type_label">Type</label>
					    <input ref={input => formFields.fruit_type = input} placeholder='Enter a Type' className="form-control" name="fruit_type_label"/>
					</div>
				</div>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button onClick={ () => props.handleFormSubmit(formFields.name.value, formFields.description.value, formFields.fruit_type.value)} className="btn btn-success">Submit</button>
		      </div>
		    </div>
		  </div>
		</div>
		</div>
    );
}
export default NewFruit