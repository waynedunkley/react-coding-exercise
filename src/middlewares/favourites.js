/* global fetch:false */
import { fetchFavouritesActionCreator, REHYDRATED, TOGGLE_FAVOURITE_TYPE } from '../actions'
import { getFavouritesApiUrl } from '../selectors'

export const fetchFavourites = async (apiUrl) => {
  let url = apiUrl
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    }
  })

  const favourites = await response.json()
  return favourites
}

export const addFavourite = async (apiUrl, id) => {
  let url = `${apiUrl}/${id}`
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json'
    }
  })

  const favourites = await response.json()
  return favourites
}

export const removeFavourite = async (apiUrl, id) => {
  let url = `${apiUrl}/${id}`
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json'
    }
  })

  const favourites = await response.json()
  return favourites
}

export default store => next => action => {
  const ret = next(action)

  if (action.type === REHYDRATED) {
    const state = store.getState()
    const apiUrl = getFavouritesApiUrl(state)
    store.dispatch(fetchFavouritesActionCreator(fetchFavourites(apiUrl)))
  }

  if (action.type === TOGGLE_FAVOURITE_TYPE) {
    const state = store.getState()
    const apiUrl = getFavouritesApiUrl(state)
    if (state.favourites.favourites[action.payload.entityId]) {
      store.dispatch(fetchFavouritesActionCreator(addFavourite(apiUrl, action.payload.entityId)))
    } else {
      store.dispatch(fetchFavouritesActionCreator(removeFavourite(apiUrl, action.payload.entityId)))
    }
  }

  return ret
}
