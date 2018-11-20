

export function addBand(dispatch, band) {
  // console.log("addBand definition")
  dispatch({
    type: 'ADD_BAND',
    payload: band
  })
}