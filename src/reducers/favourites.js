import { ActionType } from 'redux-promise-middleware'
import { FETCH_FAVOURITES_TYPE, TOGGLE_FAVOURITE_TYPE } from '../actions'

const initialState = {
  busy: false,
  favourites: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_FAVOURITES_TYPE}_${ActionType.Fulfilled}`:
      return {
        ...state,
        favourites: action.payload.reduce((o, key) => ({ ...o, [key]: true }), {})
      }
    case TOGGLE_FAVOURITE_TYPE:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          [action.payload.entityId]: (state.favourites[action.payload.entityId]) ? !state.favourites[action.payload.entityId] : true
        }
      }
    default:
      return state
  }
}

export default reducer
