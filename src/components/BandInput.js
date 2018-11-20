// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBand } from '../actions/actions'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange (event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // method for adding band needs to be included here
    this.props.addBand(this.state.name)
    
    // reset the local state
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" placeholder="Add a Band" value={this.state.name} onChange={(event) => this.handleChange(event)} /> 
          <input type="submit" />
        </form>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => addBand(dispatch, band)
//   1 
    }
  }

  // 1 - addBand being defined - the one that's being called in the handleSubmit
  // 2 - addBand is really an anonymous function, which takes  a band and sends to addBand from the actions file
  // 3 - that actions function combined with dispatch reaches out to the store. which performs a state change causing a re-render


// WORKING CODE below - alternative way when  action is defined within the mapDispatch - see below

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addBand: (band) => {
//       // console.log("addBand definition2")
//       dispatch({
//         type: 'ADD_BAND',
//         payload: band
//       })
//     }
//   }
// }



export default connect(null, mapDispatchToProps)(BandInput)

// mapDispatch.... returns an object, 
