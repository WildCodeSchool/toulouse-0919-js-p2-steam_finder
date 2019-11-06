import React from 'react';
import './FormContact.css';
import at from '../images/at-outline.png';
import edit from '../images/edit-outline.png';
import person from '../images/person-outline.png';

// eslint-disable-next-line
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

const countErrors = errors => {
  let count = 0;
  Object.values(errors).forEach(val => val.length > 0 && (count = count + 1));
  return count;
};

class FormContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      errors: {
        fullName: '',
        email: '',
        text: ''
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName = value.length < 5 ? 'Full Name must be 5 characters long!' : '';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'text':
        errors.text = value.length < 50 ? 'Text must be 50 characters long!' : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
    this.setState({ errorCount: countErrors(this.state.errors) });
  };

  render() {
    const { errors, formValid } = this.state;
    return (
      <div className="container">
        <div className="title-form">
          <h3 className="getintouch">Contact Us</h3>
          <h4 className="difficulties">
            Don't hesitate to contact us if you encounter difficulties.That's why this page is here.
            For those able to complete a form...
          </h4>
        </div>
        <form className="form-rectangle" onSubmit={this.handleSubmit} noValidate>
          <div className="components-form">
            <img className="img-form" src={person} alt="icone profil" />
            <input className="text-form" name="fullName" type="text" onChange={this.handleChange} />
          </div>
          {errors.fullName.length > 0 && <span className="error">{errors.fullName}</span>}

          <div className="components-form">
            <img className="img-form" src={at} alt="icone alt" />
            <input className="text-form" name="email" type="email" onChange={this.handleChange} />
          </div>
          {errors.email.length > 0 && <span className="error">{errors.email}</span>}
          <div className="components-form">
            <img className="img-form" src={edit} alt="icone write" />
            <textarea className="text-area" name="text" type="text" onChange={this.handleChange} />
          </div>
          {errors.text.length > 0 && <span className="error">{errors.text}</span>}

          <div className="Submit">
            <button className="button-form">Send</button>
            {this.state.errorCount !== null ? (
              <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p>
            ) : (
              'Form not submitted'
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default FormContact;
