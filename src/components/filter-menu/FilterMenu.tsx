import React from 'react';

import { DropdownButton, Dropdown } from "react-bootstrap";

interface Params {
    locations: string[];
}
const FilterMenu = (props: Params) => {
    const { locations } = props;


    return (
        <div className="flex d-flex flex-column align-items-center align-items-md-start">
            <div className="text-center">
                <h6 className="text-uppercase mb-3">Sort results</h6>
                <DropdownButton id="dropdown-basic-button" title="Locations" className="w-100">
                    {locations.map((location: string, index: any) => (
                        <Dropdown.Item href={`#${location}`} key={index}>{location}</Dropdown.Item>
                    ))}

                </DropdownButton>
            </div>
        </div>
    )

};

export default FilterMenu;