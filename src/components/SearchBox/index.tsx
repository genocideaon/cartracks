import React, {useContext} from "react";

import {UserContext} from "../../UserProvider"

const SearchBox = () => {
    const {filterUser,filterKeyword}: any = useContext(UserContext)

    const handleChange = (e: any) => {
        e.preventDefault();
        filterUser(e.target.value);
    }

    return (
        <div>
            <input type="text" value={filterKeyword} onChange={handleChange}/>
            <button>button</button>
        </div>
    )
}

export default SearchBox;