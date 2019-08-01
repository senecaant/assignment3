import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

//Import Components
import Loading from '../Loading/Loading';

const Card = (props) => {

    //Props
    const { pokemonName } = props;

    //States
    const [loading, setLoading] = useState(true);
    const [pokemonImageURL, setPokemonImageURL] = useState('');

    // useEffect runs after the component renders
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            getPokemonData();
        }, 1000);
    }, []);

    function getPokemonData() {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
            .then((response) => {
                setPokemonImageURL(response.data.sprites.front_default);
                setLoading(false);
            })
    }

    function capitalizeName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                {loading ? (<Loading styleInput='mini' />) : (
                    <React.Fragment>
                        <img src={pokemonImageURL} alt="Avatar" />
                    </React.Fragment>
                )}
                <p>{capitalizeName(pokemonName)}</p>
            </div>
        </div>
    );
};

// Props
Card.propTypes = {
    pokemonName: PropTypes.string
};

export default Card;
