

const initialState = {
    tweets: [],
    fetching: false,
    fetched: false,
    error: null
};

export default  (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TWEETS":
            return Object.assign({}, state, { fetching: true });
        case "FETCH_TWEETS_REJECTED":
            return Object.assign({}, state, { fetching: false, error: action.payload });
            break;
        case "FETCH_TWEETS_FULFILLED":
            return Object.assign({}, state, { fetching: false, fetched: true, tweets: action.payload });
            break;
        case "ADD_TWEET":
            const tweets = [state.tweets, action.payload];
            return Object.assign({}, state, tweets);
            break;
        case "UPDATE_TWEET":
            const {id, text} = action.payload;
            const newTweets = Object.assign({}, state.tweets);
            const tweetToUpdate = newTweets.findIndex(tweet=>tweet.id===id);
            newTweets[tweetToUpdate] = action.payload;
            return Object.assign({}, state, {tweets:newTweets});
        break;
        case "DELETE_TWEET": {
            const tweets = state.tweets.filter(tweet=>tweet.id!==action.payload);
            return Object.assign({}, state, tweets);
            }
        break;

    }
    return state;
}