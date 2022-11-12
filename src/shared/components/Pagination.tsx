import React from 'react';
import {Image} from 'react-bootstrap';

export interface Props {
    page: number;
    totalPages: number;
    handlePagination: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
                                                page,
                                                totalPages,
                                                handlePagination,
                                            }) => {

    return (
        <div className="pagination">
            <div className="paginationWrapper">
                {page !== 1 && (
                    <button
                        onClick={() => handlePagination(page - 1)}
                        type="button"
                        className="pageItem sides"
                    >
                        <Image
                            src="/icons/img-arrow-left.png"/>

                    </button>
                )}
                <button
                    onClick={() => handlePagination(1)}
                    type="button"
                    className={'pageItem ' + (page === 1 ? 'active' : '')}
                >
                    {1}
                </button>
                {page > 3 && <div className="separator">...</div>}
                {page === totalPages && totalPages > 3 && (
                    <button
                        onClick={() => handlePagination(page - 2)}
                        type="button"
                        className="pageItem"
                    >
                        {page - 2}
                    </button>
                )}
                {page > 2 && (
                    <button
                        onClick={() => handlePagination(page - 1)}
                        type="button"
                        className="pageItem"
                    >
                        {page - 1}
                    </button>
                )}
                {page !== 1 && page !== totalPages && (
                    <button
                        onClick={() => handlePagination(page)}
                        type="button"
                        className="pageItem active"
                    >
                        {page}
                    </button>
                )}
                {page < totalPages - 1 && (
                    <button
                        onClick={() => handlePagination(page + 1)}
                        type="button"
                        className="pageItem"
                    >
                        {page + 1}
                    </button>
                )}
                {page === 1 && totalPages > 3 && (
                    <button
                        onClick={() => handlePagination(page + 2)}
                        type="button"
                        className="pageItem"
                    >
                        {page + 2}
                    </button>
                )}
                {page < totalPages - 2 && <div className="separator">...</div>}
                <button
                    onClick={() => handlePagination(totalPages)}
                    type="button"
                    className={'pageItem ' + (page === totalPages ? 'active' : '')}
                >
                    {totalPages}
                </button>
                {page !== totalPages && (
                    <button
                        onClick={() => handlePagination(page + 1)}
                        type="button"
                        className="pageItem sides"
                    >
                        <Image
                            src="/icons/img-arrow-right.png"/>
                    </button>
                )}
            </div>
        </div>
    );
};