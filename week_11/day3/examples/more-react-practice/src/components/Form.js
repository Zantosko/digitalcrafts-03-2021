import React, { Component } from 'react'
import '../App.css';

export default class Form extends Component {
  state = {
    firstName: "zach",
    lastName: "antosko",
    street: "123 main",
    apt: "11",
    postal: "32343",
    city: "corpus",
    state: "TX",
    country: "US",
    phone: "555-555-5555"
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, street, apt, postal, city, state, country, phone } = this.state

    const formSubmissionData = {
      username: `${firstName} ${lastName}`,
      address: `${street} ${apt} ${city} ${postal} ${state} ${country}`,
      phone: phone
    }

    console.log(formSubmissionData)
  }

  render() {
    return (
      <div>
        <h1>Froms React</h1>
        <div className="shipping-form-container">
        <form className="shipping-form" onSubmit={this.onSubmit}>
          <input 
            name="firstName"
            className="shipping-input-text" 
            type="text" 
            placeholder="First Name"
            value={this.state.firstName}
            //* You only need to use a callback function if you plan on passing parameters to the function.
            onChange={(e) => this.handleChange(e)}
          />
          <input
            name="lastName"
            className="shipping-input-text" 
            type="text" 
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            name="street"
            className="shipping-input-street" 
            type="text" 
            placeholder="Street Address"
            value={this.state.street}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            name="apt"
            className="shipping-input-apt" 
            type="text" 
            placeholder="Apt. Suite"
            value={this.state.apt}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            name="postal"
            className="shipping-input-text" 
            type="text" 
            placeholder="Postal Code"
            value={this.state.postal}
            onChange={(e) => this.handleChange(e)}
          />
          <input 
            name="city"
            className="shipping-input-text" 
            type="text" 
            placeholder="City"
            value={this.state.city}
            onChange={(e) => this.handleChange(e)}
          />
          <input 
            name="state"
            className="shipping-input-text" 
            type="text" 
            placeholder="State"
            value={this.state.state}
            onChange={(e) => this.handleChange(e)}
          />
          <input 
            name="country"
            className="shipping-input-text" 
            type="text" 
            placeholder="Country"
            value={this.state.country}
            onChange={(e) => this.handleChange(e)}
          />
          <input 
            name="phone"
            className="shipping-input-phone" 
            type="text" 
            placeholder="Phone"
            value={this.state.phone}
            onChange={(e) => this.handleChange(e)}
          />
          <input className="shipping-input-button" type="submit" placeholder="Submit"/>
        </form>
        </div>
      </div>
    )
  }
}
