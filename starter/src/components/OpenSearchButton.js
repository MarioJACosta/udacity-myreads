import PropTypes from 'prop-types';

const OpenSearchButton = ({toggleShowSearchPage}) => {
    return (
        <div className="open-search">
            <a onClick={() => toggleShowSearchPage()}>Add a book</a>
        </div>
    )
};

OpenSearchButton.propTypes = {
    toggleShowSearchPage: PropTypes.func.isRequired,
}

export default OpenSearchButton;