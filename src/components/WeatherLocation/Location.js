import React from 'react';
import PropTypes from 'prop-types'

import './styles.css';


const Location = ({city}) => (
    //const city = props.city;

    //Destructuring
    //const {city} = props;
    <div className="locationCont">
        <h5>
            {city}
        </h5>
    </div>
    );

    
Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;
