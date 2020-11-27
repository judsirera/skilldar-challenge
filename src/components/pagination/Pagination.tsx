import React from 'react';

import { Pagination as PaginationBootstrap } from 'react-bootstrap';

const Pagination = () => {

    let total = 10;
    let active = 4;
    let items = [];
    for (let number = -2; number <= +2; number++) {
        if (active + number > 0 && active + number <= total) {
            items.push(
                <PaginationBootstrap.Item key={number} active={active + number === active}>
                    {active + number}
                </PaginationBootstrap.Item>,
            );
        }
    }

    return (
        <div className="flex d-flex align-items-center">
            <h6 className="text-uppercase m-0 mr-2">PAGE</h6>
            <PaginationBootstrap size="sm" className="m-0">
                {active != 1 && <PaginationBootstrap.First />}
                {active != 1 && <PaginationBootstrap.Prev />}
                {active > 3 && <PaginationBootstrap.Ellipsis />}
                {items}
                {active < total - 3 && <PaginationBootstrap.Ellipsis />}
                {active != total && <PaginationBootstrap.Next />}
                {active != total && <PaginationBootstrap.Last />}
            </PaginationBootstrap>
        </div>
    )
}

export default Pagination;