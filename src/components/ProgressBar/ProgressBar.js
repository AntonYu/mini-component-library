/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
    small: {
        padding: "0",
        height: "8px",
        radius: "4px",
    },
    medium: {
        padding: "0",
        height: "14px",
        radius: "4px",
    },
    large: {
        padding: "4px",
        height: "16px",
        radius: "8px",
    },
};

const ProgressBar = ({ value, size }) => {
    value = parseFloat(value);
    if (Number.isNaN(value)) value = 0;
    value = Math.min(100, Math.max(0, value));

    return (
        <BaseWrapper
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--padding": SIZES[size].padding, "--radius": SIZES[size].radius }}
        >
            <VisuallyHidden>{value}</VisuallyHidden>
            <CurrentValueWrapper>
                <CurrentValue
                    value={value}
                    style={{
                        "--width": `${value}%`,
                        "--height": SIZES[size].height,
                        "--radius": value === 100 ? "4px" : 0,
                    }}
                />
            </CurrentValueWrapper>
        </BaseWrapper>
    );
};

const BaseWrapper = styled.div`
    padding: var(--padding);
    border-radius: var(--radius);
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const CurrentValueWrapper = styled.div`
    border-radius: 4px;
    overflow: hidden;
`;

const CurrentValue = styled.div`
    width: var(--width);
    height: var(--height);
    border-radius: 4px 0 0 4px;
    background-color: ${COLORS.primary};

    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
`;

export default ProgressBar;
