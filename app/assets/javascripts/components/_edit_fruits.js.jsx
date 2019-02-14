// const EditFruit = (props) => {
class EditFruit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fruit: {}
		};
	  this._isMounted = false;
		this.formFields = {}
	}
  componentDidMount() {
  	console.log(this._isMounted)
  	    this._isMounted = true;
    // this.props.onRef(this)
        // this.loadInterval = setInterval(this.loadSearches, this.props.pollInterval);
        this.method({});
  }
  componentWillUnmount() {
  	console.log(this._isMounted)
  	    this._isMounted = false;
    // this.props.onRef(undefined)
    // this.loadInterval && clearInterval(this.loadInterval);
    // this.loadInterval = false;
  }
  method(fruit) {
  	console.log(this._isMounted)
  	 if (this._isMounted) {
  	 setTimeout(() => this.setState({fruit:fruit}))
          // this.setState({
          //   news: result.data.hits,
          // });
        }
  	// this.setState({fruit:fruit});
  	// console.log(fruit)
  }
  render() {
        return(
    	<div>
    	<div className="modal fade" id="editexampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">Edit Fruit</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		        <div className="form">
					<div className="form-group">
					    <label htmlFor="name_label">Name</label>
					    <input ref={input => this.formFields.name = input} defaultValue={this.state.fruit.name} placeholder='Enter the name of the item' className="form-control" name="name_label"/>
					</div>
					<div className="form-group">
					    <label htmlFor="description_label">Description</label>
					    <input ref={input => this.formFields.description = input} defaultValue={this.state.fruit.description} placeholder='Enter a description' className="form-control" name="description_label"/>
					</div>
					<div className="form-group">
					    <label htmlFor="fruit_type_label">Type</label>
					    <input ref={input => this.formFields.fruit_type = input} defaultValue={this.state.fruit.fruit_type} placeholder='Enter a Type' className="form-control" name="fruit_type_label"/>
					</div>
				</div>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button onClick={ () => props.handleEditUpdate(this.formFields)} className="btn btn-success">Submit</button>
		      </div>
		    </div>
		  </div>
		</div>
		</div>
    );
  }
  //   let formFields = props.fruit;
    
  //   return(
  //   	<div>
  //   	<div className="modal fade" id="editexampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		//   <div className="modal-dialog" role="document">
		//     <div className="modal-content">
		//       <div className="modal-header">
		//         <h5 className="modal-title" id="exampleModalLabel">Edit Fruit</h5>
		//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		//           <span aria-hidden="true">&times;</span>
		//         </button>
		//       </div>
		//       <div className="modal-body">
		//         <div className="form">
		// 			<div className="form-group">
		// 			    <label htmlFor="name_label">Name</label>
		// 			    <input ref={input => formFields.name = input} defaultValue={props.fruit.name} placeholder='Enter the name of the item' className="form-control" name="name_label"/>
		// 			</div>
		// 			<div className="form-group">
		// 			    <label htmlFor="description_label">Description</label>
		// 			    <input ref={input => formFields.description = input} defaultValue={props.fruit.description} placeholder='Enter a description' className="form-control" name="description_label"/>
		// 			</div>
		// 			<div className="form-group">
		// 			    <label htmlFor="fruit_type_label">Type</label>
		// 			    <input ref={input => formFields.fruit_type = input} defaultValue={props.fruit.fruit_type} placeholder='Enter a Type' className="form-control" name="fruit_type_label"/>
		// 			</div>
		// 		</div>
		//       </div>
		//       <div className="modal-footer">
		//         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		//         <button onClick={ () => props.handleEditUpdate(formFields)} className="btn btn-success">Submit</button>
		//       </div>
		//     </div>
		//   </div>
		// </div>
		// </div>
  //   );
}