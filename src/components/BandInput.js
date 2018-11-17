import React, { Component } from 'react'


class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <h1>Band Input</h1>
        <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="band name"
          value={this.state.name}
          onChange={this.handleChange}
          />
          <button type="submit">Add band</button> 
        </form>
      </div>
    )
  }
}



export default BandInput
