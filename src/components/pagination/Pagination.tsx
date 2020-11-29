import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Pagination as PaginationBootstrap } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

interface Params {
    active: number;
    total: number;
    handlePagination: any;
}
const Pagination = (props: Params) => {
    const { active, total, handlePagination } = props;

    const useURLQuery = new URLSearchParams(useLocation().search);

    let searchQuery = "?"
    useURLQuery.forEach((value, key) => {
        if (key !== "page") searchQuery += (key + "=" + value + "&");
    });


    const handleClick = (pageTarget: number) => {
        handlePagination(pageTarget);
    }

    let items = [];
    for (let number = -2; number <= +2; number++) {
        let value: number = active + number;

        if (value > 0 && value <= total) {
            items.push(
                <li className={`page-item ${value === active && 'active'}`} key={value}>
                    <Link to={{ pathname: "/search", search: `${searchQuery}page=${value}` }}
                        className="page-link"
                        onClick={() => handleClick(value)}>{value}
                    </Link>
                </li>
            );
        }
    }

    const next = <li className={`page-item ${active === total && 'disabled'}`}>
        <Link to={{ pathname: "/search", search: `${searchQuery}page=${active + 1}` }}
            className="page-link"
            onClick={() => handleClick(active + 1)}><FontAwesomeIcon icon={faAngleRight} />
        </Link>
    </li>

    const prev = <li className={`page-item ${active === 1 && 'disabled'}`}>
        <Link to={{ pathname: "/search", search: `${searchQuery}page=${active - 1}` }}
            className="page-link"
            onClick={() => handleClick(active - 1)}><FontAwesomeIcon icon={faAngleLeft} />
        </Link>
    </li>

    return (
        <>
            {total > 0 && <div className="flex d-flex align-items-center">
                <h6 className="text-uppercase m-0 mr-2">PAGE</h6>
                <PaginationBootstrap size="sm" className="m-0">
                    {prev}
                    {active > 3 && <PaginationBootstrap.Ellipsis />}
                    {items}
                    {active < total - 3 && <PaginationBootstrap.Ellipsis />}
                    {next}
                </PaginationBootstrap>
            </div>}
        </>


    )
}

export default Pagination;