import React, { Component, Fragment } from 'react';
import ComingSoon from './../modules/widgets/coming-soon'

class galleryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Fragment>
                <ComingSoon 
                isGalleryPage
                />
            </Fragment>
        );
    }
}

export default galleryPage;