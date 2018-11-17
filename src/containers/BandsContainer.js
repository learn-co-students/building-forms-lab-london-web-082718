import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <h1>Bands</h1>
        <ul>  
          {this.props.bands.map(band =>
          <li>{band}</li>
          )}
        </ul>
        <BandInput />
      </div>
    )
  }
}

export default connect(state => ({ bands: state.bands }))(BandsContainer)
