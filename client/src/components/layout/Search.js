import React, {useState} from 'react'

const Search = () => {
    const [search, setSearch] = useState('')

    return (
        <div>
            <h3 className="title">Search Movies/TV Shows</h3>
                <input 
                    type="text" 
                    placeholder="Search name" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
        </div>
    )
}

export default Search
