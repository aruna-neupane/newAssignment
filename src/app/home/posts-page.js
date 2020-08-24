import React, { Component, Fragment } from 'react';
import ComingSoon from './../modules/widgets/coming-soon'

class postPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Fragment>
                <ComingSoon 
                isPostPage
                />
            </Fragment>
        );
    }
}

export default postPage;