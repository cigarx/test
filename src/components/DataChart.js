import React, { PropTypes } from 'react';

const DataChart = ({ className }) => {
    return (
        <img src="./img/clipboard.png" />
    );
};

DataChart.displayName = 'DataChart';

DataChart.propTypes = {
    className: PropTypes.string,
};

export default DataChart;
