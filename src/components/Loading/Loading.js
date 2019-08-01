import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.module.css';
import loading from './loading.gif';

const Loading = (props) => {

    //Props
    const { styleInput } = props;

    //States
    const [style, setStyle] = useState(() => {
        if (styleInput == 'mini')
            return styles.loadingMini;
        else
            return styles.loading;
    });


    return (
        <div className={style}>
            <img src={loading} alt="Loading..." />
        </div>
    );
}

// Props
Loading.propTypes = {
    styleInput: PropTypes.string
};


export default Loading;
