import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
// import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput /> 
        <div>
          {this.props.bands.map((band, index) => <li key={index}>{band}</li> )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands } 
}



export default connect(mapStateToProps)
(BandsContainer)
