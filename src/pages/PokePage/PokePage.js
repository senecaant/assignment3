import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './PokePage.module.css';

//Import Components
import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const PokePage = (props) => {

    //Props
    const { pokemonName } = props.match.params;

    //States
    const [loading, setLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState();

    // useEffect runs after the component renders
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            getPokemonData();
        }, 1000);
    }, []);

    function getPokemonData() {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
            .then((response) => {
                setPokemonData(response.data);
                setLoading(false);
            })
    }

    function capitalizeName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <div className={styles.pokePage}>
                {loading ? (<Loading />) : (
                    <React.Fragment>
                        <h2>{capitalizeName(pokemonData.name)}</h2>
                        <img src={pokemonData.sprites.front_default} alt="Avatar" />
                        <table>
                            <tr>
                                <th>Stat</th>
                                <th>Value</th>
                            </tr>
                            <tr>
                                <td>HP</td>
                                <td>{pokemonData.stats[5].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>{pokemonData.stats[4].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>{pokemonData.stats[3].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Special Attack</td>
                                <td>{pokemonData.stats[2].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Special Defense</td>
                                <td>{pokemonData.stats[1].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>{pokemonData.stats[0].base_stat}</td>
                            </tr>
                        </table>
                        <Button>Go back</Button>
                    </React.Fragment>
                )}

        </div>
    );
}

// Props
PokePage.propTypes = {
    pokemonName: PropTypes.string
};

export default PokePage;