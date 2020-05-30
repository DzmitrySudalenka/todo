import React from "react";

import './search-panel.css';

const SearchPanel = () => {

    /*const searchText = 'Type here to search';

    const searchStyle = {
        fontSize: '20px'
    };

    return <input
        placeholder={ searchText }
        autoComplete=""
        className="foo"
        htmlFor="bar"
        style={ searchStyle }
        /!*disabled*!/
    />;*/

    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search" />
    );
}

export default SearchPanel;