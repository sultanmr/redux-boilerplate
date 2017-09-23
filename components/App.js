import React from 'react';
import {connect} from 'react-redux';

import * as users from '../api/redux/actions/user';
import * as tweets from '../api/redux/actions/tweets'

class App extends React.Component {

        componentWillMount (props) {
                this.props.dispatch(users.fetchUser());
                this.fetchTweets();
        }       

        fetchTweets () {
                this.props.dispatch(tweets.fetchTweets());
        }
        
       render () {

        const user = this.props.user.user;
        const tweets = this.props.tweets;
        if (!tweets.length) {
                return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
        }
        const mappedTweets = tweets.map(tweet=><li>tweet.text</li>);
        return (<div>
        <p>{user.name}</p>
        <ul>{mappedTweets}</ul>
        </div>);
        }
}


function mapStateToProps(state) {
        return state;
}
export default connect(mapStateToProps)(App);

