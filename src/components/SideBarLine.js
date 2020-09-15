import React from 'react';
import PropTypes from 'prop-types';
import "./SideBarLine.css"
import moment from "moment"
const SideBarLine = (props) => {

    const { updated, location, type } = props;
    let name = (props.name.length > 25) ?
        props.name.slice(0, 25).concat("...") : props.name

    console.log(location)
    return (
        <div className="sidebar-line">
            <li>
                <div className="row">
                    <div className="col-1">
                        <p>{name}</p>
                    </div>
                    <div className="col-2">
                        <p>{moment(updated).format("MMM YY")}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <small>{type} </small>
                    </div>
                    <div className="col-2">
                        <small>{moment(updated).format("h:mm a")}</small>
                    </div>
                </div>
            </li>
        </div >
    );
};


SideBarLine.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    updated: PropTypes.number,
    location: PropTypes.string,
    type: PropTypes.string
};


export default SideBarLine;
