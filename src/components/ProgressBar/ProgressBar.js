/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
    value = parseFloat(value);
    if (Number.isNaN(value)) value = 0;
    value = Math.min(100, Math.max(0, value));

    let Component;
    if (size === "large") {
        Component = LargeWrapper;
    } else if (size === "medium") {
        Component = MediumWrapper;
    } else {
        Component = SmallWrapper;
    }

    return (
        <Component role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
            <VisuallyHidden>{value}</VisuallyHidden>
            <CurrentValue value={value} />
        </Component>
    );
};

const BaseWrapper = styled.div`
    padding: 0;
    border-radius: 8px;
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    overflow: hidden;
`;

const LargeWrapper = styled(BaseWrapper)`
    padding: 4px;
`;

const MediumWrapper = styled(BaseWrapper)``;

const SmallWrapper = styled(BaseWrapper)``;

const CurrentValue = styled.div`
    --borderRadius: 4px;
    background-color: ${COLORS.primary};
    width: ${(props) => props.value}%;
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    border-top-right-radius: ${(props) => props.value === 100 && `var(--borderRadius)`};
    border-bottom-right-radius: ${(props) => props.value === 100 && `var(--borderRadius)`};

    ${LargeWrapper} & {
        height: 16px;
    }

    ${MediumWrapper} & {
        height: 14px;
    }

    ${SmallWrapper} & {
        height: 8px;
    }
`;

export default ProgressBar;
