import { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    // Validation checks
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneNumberRegex = /^\d+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

    // Perform validations
    let isValid = true;
    const errorsData = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      dob: '',
      address: '',
      postalCode: '',
      phoneNumber: '',
    };

    if (!nameRegex.test(formData.firstName)) {
      isValid = false;
      errorsData.firstName = 'Name should only contain alphabets.';
    }

    if (!nameRegex.test(formData.lastName)) {
      isValid = false;
      errorsData.lastName = 'Name should only contain alphabets.';
    }

    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      isValid = false;
      errorsData.phoneNumber = 'Phone number should be numerical.';
    }

    if (!passwordRegex.test(formData.password)) {
      isValid = false;
      errorsData.password = 'Password should contain at least one letter and one number.';
    }

    // Update errors state
    setErrors(errorsData);

    // Submit the form if all validations pass
    if (isValid) {
      // TODO: Handle form submission, e.g., send data to server
      console.log(formData); // Output the form data for now
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Registration Form</h2>
      <form>
        <div className="row">
          <div className="column">
            <label className="label">
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div className="column">
            <label className="label">
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label className="label">
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div className="column">
            <label className="label">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label className="label">
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>

          <div className="column">
            <label className="label">
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label className="label">
              Address:
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div className="column">
            <label className="label">
              Postal Code:
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            {errors.postalCode && <p className="error">{errors.postalCode}</p>}
          </div>
        </div>

        <button type="button" className="button" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
