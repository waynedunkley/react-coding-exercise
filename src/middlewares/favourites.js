/* global fetch:false */
import { fetchFavouritesActionCreator, REHYDRATED } from '../actions'
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

export default store => next => action => {
  const ret = next(action)

  if (action.type === REHYDRATED) {
    const state = store.getState()
    const apiUrl = getFavouritesApiUrl(state)
    store.dispatch(fetchFavouritesActionCreator(fetchFavourites(apiUrl)))
  }

  return ret
}
