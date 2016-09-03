import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class UpdatePhotoSetForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.photoSet.id,
      title: this.props.photoSet.title,
      ord: this.props.photoSet.ord,
      album_id: this.props.photoSet.album_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  update(fieldName){
    return e => { this.setState({[fieldName]: e.currentTarget.value }); };
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo_set = this.state;
    this.props.updatePhotoSet({photo_set}, this.props.closeModal);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  renderErrors() {
    return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li className="error" key={i}>
						{error}
					</li>
				))}
			</ul>
		);

  }


  render() {

     return(
       <div >
 				<form onSubmit={this.handleSubmit} className="create-form-box">
 					<label className="create-form-title">EDIT PHOTO SET</label>
 					<br/>
 					{ this.renderErrors() }
 					<div className="create-form">
 						<br />
 						<label> Name:</label>
 							<input type="text"
 								value={this.state.title}
 								onChange={this.update("title")}
 								className="create-input" />
 						<br />
 						<input type="submit" value="Update" />
             <br/>

 					</div>
 				</form>
 			</div>

    );
  }
}

export default UpdatePhotoSetForm;
