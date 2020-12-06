import React, {Component} from 'react';
import PropTypes from 'prop-types';
const MoviesList = ({movies}) =>  {

    const emptyMessage = (
        <p>Film yook</p>
    );
    const moviesList = (
        <div>Movies List</div>
    );

        return (
            <div>
                { movies.length === 0 ? emptyMessage:moviesList }
            </div>
        );
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MoviesList;