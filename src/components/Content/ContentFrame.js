import React, { Component, PropTypes } from 'react';
import { Card } from 'antd'
import QueueAnim from 'rc-queue-anim'
import DataTable from '../DataTable'
import ContentTable from './ContentTable'
import AdvSearcher from './AdvSearcher'

class ContentFrame extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
    	const animProp = {
    		leaveReverse: true,
    		type: 'top',
    		delay: 300,
    		duration: 200
    	}
        const { isAdvSearchShow } = this.props
        return (
        	<div>
	        	<QueueAnim {...animProp}>
	        		{
	        			isAdvSearchShow ?
	        			<Card >
			        		<AdvSearcher key="adv-searcher"/>
		        		</Card> : null
	        		}
        		</QueueAnim>
            		<ContentTable/>
            	</div>
        );
    }
}

export default ContentFrame;
