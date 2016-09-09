import React from 'react';
import { Link } from 'react-router';


class DeletePhotoSetForm extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const photoSet = this.props.photoSet;
    let success = () => {
      this.props.closeModal();
      this.goToNextPhoto
    };
    this.props.destroyPhotoSet(photoSet, success);
  }


  render() {

     return(
       <div >
 				<form onSubmit={this.handleSubmit} className="create-form-box">
 					<label className="create-form-title">{"DELETE PHOTOSET"}</label>
 					<br/>
 					<div className="create-form">
 						<br />
 						<label>Are you sure you want to delete photo set? This will delete all photos in the set</label>
 						<br />
 						<input className="set-submit" type="submit" value="Delete" />
             <br/>

 					</div>
 				</form>
 			</div>

    );
  }
}

export default DeletePhotoSetForm;
