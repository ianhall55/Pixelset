import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class DeletePhotoForm extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const photos = this.props.photos;
    let success = () => {
      this.props.closeModal();
      this.props.clearSelection();
    };
    this.props.destroyPhoto({photos}, success);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map( (error, i) => (
            <li className="error" key={i}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      return(
        <ul></ul>
      );
    }

  }


  render() {

     return(
       <div >
 				<form onSubmit={this.handleSubmit} className="create-form-box">
 					<label className="create-form-title">{"DELETE PHOTO"}</label>
 					<br/>
 					{ this.renderErrors() }
 					<div className="create-form">
 						<br />
 						<label>Are you sure you want to delete?</label>
 						<br />
 						<input type="submit" value="Delete" />
             <br/>

 					</div>
 				</form>
 			</div>

    );
  }
}

export default DeletePhotoForm;
