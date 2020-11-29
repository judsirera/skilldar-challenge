import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { DropdownButton } from "react-bootstrap";


interface Params {
    locations: string[];
    active: string;
    onFilter: any;
}

const FilterMenu = (props: Params) => {
    const { locations, active, onFilter } = props;

    const handleClick = (event: any) => {
        onFilter(event.target.innerText);
    }

    return (
        <div className="flex d-flex flex-column align-items-center align-items-md-start">
            <div className="text-center">
                <h6 className="text-uppercase mb-3">Sort results</h6>
                <DropdownButton id="dropdown-basic-button" title={active === "All" ? "Locations" : active} className="w-100">
                    {locations.map((location: string, index: any) => (
                        <Link
                            to={{ pathname: '/search', search: `?location=${location}&page=1` }}
                            key={index}
                            className={`dropdown-item ${active === location ? 'active' : ''}`}
                            onClick={handleClick}>{location}</Link>
                    ))}
                </DropdownButton>
            </div>
        </div >
    )

};

export default FilterMenu;