import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = (props) => {

    //States

    //Props
    const { color, children } = props;

    return (
        <div className={styles.center}>
            <Link to="/">
                <button
                    type="button"
                    className={`${styles.button} ${styles[color || "success"]}`}>
                    {children}
                </button>
            </Link>
        </div>
    );
};

// Props
Button.propTypes = {
    color: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node
    ])
};

export default Button;