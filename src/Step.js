// @refresh reset

import React, {Fragment, memo} from "react";
import PropTypes from "prop-types";

const resolvePosition = (strid, current, all) => {
    const s = all.indexOf(strid);
    const c = all.indexOf(current);

    if (s < c) {
        return -1;
    }

    if (s === c) {
        return 0;
    }

    return 1;
}

const Step = memo(({
    strid, current, all, focused, unfocused
}) => {
    const position = resolvePosition(strid, current, all);

    switch (position) {
        case -1:
            return unfocused();
        case 0:
            return focused();
        case 1:
            return <Fragment />;
        default:
            throw new Error(`Invalid position ${position}`);
    }
}, (prev, next) => {
    return (
        (
            prev.current === next.current
            && !next.refresh
        )
        || (
            resolvePosition(prev.strid, prev.current, prev.all) === resolvePosition(next.strid, next.current, next.all)
            && !next.refresh
        )
    );
});

Step.propTypes = {
    strid: PropTypes.string.isRequired,
    current: PropTypes.string.isRequired,
    all: PropTypes.arrayOf(PropTypes.string).isRequired,
    focused: PropTypes.func.isRequired,
    unfocused: PropTypes.func,
    refresh: PropTypes.bool // Forces refresh. Useful for execution button
};

export default Step;