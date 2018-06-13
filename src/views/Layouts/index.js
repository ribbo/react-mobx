import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter, Link } from 'react-router-dom';

import MainMenu from '../../components/MainMenu';

import styles from './styles.css';

@inject('layoutsStore')
@observer
class Layouts extends Component {

    componentDidMount() {
        const {
            layoutsStore
        } = this.props;
    }

    render() {
        const {
            layoutsStore
        } = this.props;

        return (
            <div>
                <MainMenu />
                <h1>Welcome to the Layouts page!</h1>
            </div>
        )
    }
}

export default withRouter(Layouts);
