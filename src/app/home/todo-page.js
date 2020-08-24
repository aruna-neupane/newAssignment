import React, { Component, Fragment } from 'react';
import ComingSoon from './../modules/widgets/coming-soon'

class todo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Fragment>
                <ComingSoon 
                isTodoPage
                />
            </Fragment>
        );
    }
}

export default todo;