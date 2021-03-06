import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addContacts } from '../actions/index';
import { bindActionCreators } from 'redux';

class Add extends Component {

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addContacts({
      fullname: this.fullnameRef.value,
      phone: this.phoneRef.value,
      email: this.emailRef.value
  });
};


  render() {
  return (
    <div className="OuterContainer">
      <Link to="/"><i className="fa fa-times fa-3x"></i></Link>

      <form data-toggle="validator" onSubmit={this.handleFormSubmit.bind(this)}>
        <h3>Add a contacts</h3>
        <p>Add new contacts info, location and phone.</p>
        <br/>
        <div>
          <input className="form-control" type="text" ref={(input) => this.fullnameRef = input} placeholder="full name" required />
          <br/>
          <input className="form-control" type="tel" pattern="^\d{3}-\d{3}-\d{4}$" ref={(input) => this.phoneRef = input} placeholder="phone (xxx-xxx-xxxx)" required />
          <br/>
          <input className="form-control" type="email" ref={(input) => this.emailRef = input} placeholder="email" required />
          <br/>
      </div>
        <button type="submit" className="btn btn-info Savebutton">Save</button>
      </form>
    </div>
  );
}
}

//the new component will subscribe to redux store update.
function mapStateToProps(state) {
 return {
   contacts: state.contactsReducer.contacts
 }
}

//whenever addContacts is called, the result will pass to all the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addContacts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);
