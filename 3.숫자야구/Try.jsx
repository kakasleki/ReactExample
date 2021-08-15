import React, { memo } from 'react';

export default memo(
    function Try ({ tryInfo }) {
        return (
            <>
                <li>
                    <div>{tryInfo.try}</div>
                    <div>{tryInfo.result}</div>
                </li>
            </>
        );
    }
);