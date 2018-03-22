import { FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_ERROR } from '../actions/friendActions';

export default (friends = [], action) => {
    switch (action.type) {
        case FETCH_FRIENDS_SUCCESS:
            return action.friends;
        case FETCH_FRIENDS_ERROR:
            return 'error'
        default: 
            return friends;
    }
}

