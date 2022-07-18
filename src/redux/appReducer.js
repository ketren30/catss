const initialState = {
  loading: false,
  alert: null
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "showLoaders":
      return {...state, loading: true}
    case "hideLoader":
      return {...state, loading: false}
    case "showAlert":
      return {...state, alert: action.payload}
    case "hideAlert":
      return {...state, alert: null}
    default: return state
  }
}
