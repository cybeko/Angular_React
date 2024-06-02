import React, { useState } from 'react';
import './Form.css';

function Form() {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(); 
  const [selectedOption, setSelectedOption] = useState('');
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateUserId = () => {
    return userId.length >= 5 && userId.length <= 7;
  }
  const validatePassword = () => {
    return password.length >= 7 && password.length <= 12;
  }
  const validateName = () => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(name);
  }
  const validateAddress = () => {
    const letters = /[a-zA-Z]/.test(address);
    const numbers = /\d/.test(address);
    return letters && numbers;
  }
  const validateZip = () => {
    const letters = /[a-zA-Z]/.test(zip);
    const numbers = /\d/.test(zip);
    return letters && numbers;
  }
  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleZipChange = (event) => {
    setZip(event.target.value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsEmailValid(event.target.checkValidity()); 
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validateUserId()&& validatePassword()&&validateName()&&validateAddress() && validateZip() && isEmailValid) {
      setFormSubmitted(true);
      alert('Form submitted');
    }
    else {
      alert('Incorrect');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <div className='container--box'>
          <label> User id [ 5 to 7 chars]:
            <input type="text" name="userId" value={userId} onChange={handleUserIdChange}/>
            <span>{validateUserId() ? '✔️' : '❌'}</span>
          </label>
          <label> Password [ 7 to 12 chars]:
            <input type="text" name="password" value={password} onChange={handlePasswordChange}/>
            <span>{validatePassword() ? '✔️' : '❌'}</span>
          </label>
          <label> Name [ Alphabet characters]:
            <input type="text" name="name" value={name} onChange={handleNameChange}/>
            <span>{validateName() ? '✔️' : '❌'}</span>
          </label>
          <label> Address [ Alphanumeric characters]:
            <input type="text" name="address" value={address} onChange={handleAddressChange}/>
            <span>{validateAddress()? '✔️' : '❌'}</span>
          </label>
          <label> ZIP code [ Alphanumeric characters]:
            <input type="text" name="zip" value={zip} onChange={handleZipChange}/>
            <span>{validateZip()? '✔️' : '❌'}</span>
          </label>
          <label> Email [ Valid email]:
            <input type="email" name="email" value={email} onChange={handleEmailChange}/>
            <span>{isEmailValid ? '✔️' : '❌'}</span>
          </label>
          <label> Country [Select a country]:
            <select value={country} onChange={handleCountryChange} required>
                <option value="Ukraine">Ukraine</option>
                <option value="Poland">Poland</option>
                <option value="USA">USA</option>
            </select>
          </label>
          <label> Sex [Select one]: 
              <input type="radio" name="sex" value="male" checked={selectedOption === "male"} onChange={handleOptionChange}/> Male
              <input type="radio" name="sex" value="female" checked={selectedOption === "female"} onChange={handleOptionChange} /> Female
            </label>
          </div>
        <input type="submit"/>
      </div>
    </form>
    )
}

export default Form;