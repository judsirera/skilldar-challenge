import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

import './relatedsearch.scss';

interface Params {
    terms: string[];
}
const RelatedSearch = (props: Params) => {
    const { terms } = props;
    return (
        <div className="flex d-flex flex-column align-items-center align-items-md-end">
            <div className="text-center">
                <h6 className="text-uppercase mb-3">Related Searches</h6>
                {terms.map((term: string, index: any) => (
                    <p key={index} className="mb-1 items"><FontAwesomeIcon icon={faHashtag} /> {term}</p>
                ))}
            </div>
        </div>
    )
}

export default RelatedSearch;