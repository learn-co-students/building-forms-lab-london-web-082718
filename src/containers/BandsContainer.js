import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import { addBand } from '../actions/addBand'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <h1>Bands</h1>
        <ul>  
          {this.props.bands.map(band =>
          <li>{band.name}</li>
          )}
        </ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

export default connect(state => ({ bands: state.bands }), {addBand})(BandsContainer)
