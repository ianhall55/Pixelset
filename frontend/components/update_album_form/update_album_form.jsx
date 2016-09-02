import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';




class UpdateAlbumForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.album.id,
      title: this.props.album.title,
      event_date: this.props.album.event_date,
      owner_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  update(fieldName){
    return e => { this.setState({[fieldName]: e.currentTarget.value }); };
  }

  handleDateChange(date) {
    this.setState({
      event_date: date.toDate()
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const album = this.state;
    this.props.updateAlbum({album}, this.props.closeModal);
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
 					<label className="create-form-title">EDIT ALBUM</label>
 					<br/>
 					{ this.renderErrors() }
 					<div className="create-form">
 						<br />
 						<label> Title:</label>
 							<input type="text"
 								value={this.state.title}
 								onChange={this.update("title")}
 								className="create-input" />
 						<br />
 						<label> Event Date: </label>
            <DatePicker className="create-input" selected={moment(this.state.event_date)}
              onChange={this.handleDateChange} />

 						<br />
 						<input type="submit" value="Update" />
             <br/>

 					</div>
 				</form>
 			</div>

    );
  }
}

export default UpdateAlbumForm;
