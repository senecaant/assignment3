import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pokedex.module.css';
import PropTypes from 'prop-types';

import Card from '../../components/Card/Card';

const Pokedex = (props) => {

    //Props
    const { listData } = props;

    return (
        <div className={styles.pokedex}>
            {listData.map((post) => {
                return (
                    <div>
                        <Link to={`/${post.name}`}>
                            <Card pokemonName={post.name} />
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

// Props
Pokedex.propTypes = {
    listData: PropTypes.array
};


export default Pokedex;
