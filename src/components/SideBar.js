import React from 'react';
import PropTypes from 'prop-types';
import SideBarLine from './SideBarLine';
import "./SideBar.css"

const SideBar = (props) => {
    const { data, onClose, onReload } = props
    const [searchInput, setSearchInput] = React.useState("");
    const [sortAsc, setSortAsc] = React.useState(true);
    const [sortedList, setSortedList] = React.useState([]);

    const handleSort = () => {
        setSortAsc(!sortAsc)
    }



    const handleInputChange = (e) => {
        console.log("handleInputChange", e.target.value)

        const input = e.target.value.toLowerCase()
  
        setSearchInput(e.target.value)

        let arr = data.filter(item => (item.name.toLowerCase().includes(input)))
        arr = sortAsc ? 
        arr.sort((a, b) => a.updated - b.updated) :
        arr.sort((a, b) => b.updated - a.updated)
        setSortedList(arr);
    }



    React.useEffect(() => {
        const arr = sortAsc ?
            data.sort((a, b) => a.updated - b.updated) :
            data.sort((a, b) => b.updated - a.updated)
        setSortedList(arr);
    }, [data, sortAsc]);

    return (
        <div className="sidebar">
            <div className="header">
                <h3>Reports {data.length}</h3>
                <button onClick={onReload} type="button">
                    <i className="fa fa-refresh"></i>
                </button>
                <button onClick={onClose} type="button">
                    <i className="fa fa-times"></i>
                </button>
            </div>
            <div className="search">
                <input type="text"
                    onChange={handleInputChange}
                    value={searchInput} placeholder="search reports">
                </input>
                <button type="button" onClick={handleSort}>
                    <i className="fa fa-sort"></i>
                </button>
            </div>
            <ul>
                {sortedList.map(line => {
                    const { id, name, created, updated, location, type } = line
                    return <SideBarLine
                        key={id}
                        id={id}
                        name={name}
                        created={created}
                        updated={updated}
                        location={location}
                        type={type}
                    />
                })}
            </ul>
        </div>
    );
};


SideBar.propTypes = {
    data: PropTypes.arrayOf(Object),
    onClose: PropTypes.func,
    onReload: PropTypes.func
};


export default SideBar;
