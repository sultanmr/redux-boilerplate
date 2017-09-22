import React from 'react';
import {connect} from 'react-redux';

import * as user from '../api/redux/actions/user';


class App extends React.Component {

        componentWillMount (props) {
                this.props.dispatch(user.fetchUser());
        }
        
       render () {

        console.log(this.props);
        return (<div>
        
        </div>);
        }
}


function mapStateToProps(state) {
        return state;
}
export default connect(mapStateToProps)(App);

