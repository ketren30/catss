const initialState = {
    cats: [],
    filtr: '1'
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "fetchData":
            return {...state, cats: action.payload}
        case "changeFiltr":
            return {...state, filtr: action.payload}
        case "changeLike":
            return {...state, cats: state.cats.map((item)=> {
                if (item.breed === action.payload) return {...item, isliked: !item.isliked}
                else return item
            })}
        case "changeDel":
            return {...state, cats: state.cats.map((item)=> {
                if (item.breed === action.payload) return {...item, isdeleted: true}
                else return item
            })}
        default: return state
    }
} 