import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import MainMenu from '../../components/MainMenu';

@observer
class Home extends Component {
    render() {
        return (
            <div>
                <MainMenu />
                <h1>Welcome to the App!</h1>
            </div>
        )
    }
}

export default withRouter(Home);
