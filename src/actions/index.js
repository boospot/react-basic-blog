import jsonPlaceholder from '../api/jsonPlaceholder'


export const fetchPosts = () => {

    return async function (dispatch, getState) {

        const response = await jsonPlaceholder.get('/posts');

        console.log(response)
        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        });
    }


}