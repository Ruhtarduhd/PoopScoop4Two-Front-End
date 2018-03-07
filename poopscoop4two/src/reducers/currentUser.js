import {USER_LOGIN_SUCCESS} from '../actions/users'

export default function (state = null, action) {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			return action.payload
    case 'UPDATE_BREED_STATS':
      return action.payload
		default: return state
	}
}
