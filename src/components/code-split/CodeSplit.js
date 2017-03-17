import React, { Component, PropTypes } from 'react';

class CodeSplit extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Code Split</div>
        );
    }
}

export default CodeSplit;
module.exports= CodeSplit