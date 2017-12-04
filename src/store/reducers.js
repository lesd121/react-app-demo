import { combineReducers } from 'redux'

const initState = {
  pageTitle: '',
  records: []
}

function myAppState(state = initState, action) {
  if(action.type === 'PAGE_TITLE') {
    return Object.assign({}, state, { pageTitle: action.str })
  }
  else if(action.type === 'RECORD') {
    return Object.assign({}, state, {
      records: [
        ...state.records,
        action.str
      ]
    })
  }
  return state
}

const createReactAppDemo = combineReducers({
  myAppState
})

export default createReactAppDemo
