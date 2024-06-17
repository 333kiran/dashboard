// import React from 'react';
// import { Input } from 'antd';

// const { Search } = Input;

// const SearchBar = ({ onSearch }) => {
//     return (
//         <Search
//             placeholder="Search by name or username..."
//             onChange={e => onSearch(e.target.value)}
//             style={{ marginBottom: 20 }}
//         />
//     );
// };

// export default SearchBar;


import React from 'react';
import { Input } from 'antd';

const SearchBar = ({ onSearch }) => {
    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <Input
            placeholder="Search by name or username"
            onChange={handleSearch}
            style={{ width: '100%', borderRadius: '10px', padding: '10px 15px' }}
        />
    );
};

export default SearchBar;
