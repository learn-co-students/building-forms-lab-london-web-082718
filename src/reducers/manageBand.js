export default function manageBand(state = {
  bands: ["test"],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
    console.log(action, state.bands)
    return { bands: [...state.bands, action.payload]}
  default:
    return state
  }
  
};
