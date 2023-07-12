import { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    // TODO: Handle login form submission
    console.log(formData); // Output the form data for now
  };

  return (
    <div className="container">
      <h2 className="heading">Login Form</h2>
      <form>
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

        <button type="button" className="button" onClick={handleSubmit}>
          Login
        </button>
        <br/><br/>
        <a href="/register" className="link">
          Already have an account? Register here.
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
