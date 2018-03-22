import { FETCHED_FRIENDS_SUCCESS, FETCH_FRIENDS_ERROR } from './friendActions';

export default (friends = [], action) => {
    switch (action.type) {
        case FETCH_FRIENDS_SUCCESS:
            return [...action.friends];
        default: 
            return friends;
    }
}

