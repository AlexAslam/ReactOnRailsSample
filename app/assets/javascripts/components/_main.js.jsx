const Main = (props) => {
    return(
      <div className="container">
	      <div className="row">
	      <div className="col-md-6">
		      <h1>Fruits are great!</h1>
		      </div>
	      <div className="col-md-6">
		      <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">New</button>
		      </div>
	      </div>
        <Body />
      </div>
    )
}