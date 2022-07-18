
export const showLoader=()=> {
    return {type: "showLoader"}
}

export const hideLoader=()=> {
    return {type: "hideLoader"}
}

export function showAlert(text) {
    return dispatch => {
      dispatch({
        type: 'showAlert',
        payload: text
      })
  
      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    }
  }

export function hideAlert() {
  return {
    type: "hideAlert"
  }
}

export function fetchData () {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await fetch('https://raw.githubusercontent.com/ketren30/catss/main/cats.json')
            const json = await response.json()
            setTimeout(()=> {
                dispatch({type: "fetchData", payload: json})
                dispatch(hideLoader())
            }, 500)
        } catch (e) {
            dispatch(showAlert("Что-то пошло не так..."))
            dispatch(hideLoader())
        }
    }
}

export const changeFiltr = (value) => {
  return dispatch => {
    dispatch({
      type: 'changeFiltr',
      payload: value
    })
  }
}


export const changeLike = (breed) => {
  return dispatch => {
    dispatch({
      type: 'changeLike',
      payload: breed
    })
  }
};

export const changeDeleted = (breed) => {
  return dispatch => {
    dispatch({
      type: 'changeDel',
      payload: breed
    })
  }
};


/* const ChangeDeleted = (breed) => {
  setCats(prevState =>
    prevState.map(item =>
      item.breed === breed
      ? { ...item, isdeleted: true }
      : item
    )
  )
}; */
