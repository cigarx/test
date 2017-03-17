import React, { Component, PropTypes } from 'react';
import UserSearch from './RegistrationForm'
import UserTable from './userTable'
class NewContentFrame extends Component {
    static propTypes = {
        className: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='myForm'>
                <UserSearch/>
                <UserTable/>
            </div>
        );
    }
}

export default NewContentFrame;
