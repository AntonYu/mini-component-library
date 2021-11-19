import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <HiddenSelect value={value} onChange={onChange}>
                {children}
            </HiddenSelect>
            <VisibleSelect>
                {displayedValue}
                <Chevrone id="chevron-down" size={24} strokeWidth={2} />
            </VisibleSelect>
        </Wrapper>
    );
};

const HiddenSelect = styled.select`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    width: fit-content;
    position: relative;
`;

const VisibleSelect = styled.div`
    padding: 12px 52px 12px 16px;
    font-size: 16px;
    line-height: 19px;
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};
    border: 0;
    border-radius: 8px;

    ${HiddenSelect}:focus + & {
        outline: 2px solid ${COLORS.primary};
        outline-offset: 0;
    }

    ${HiddenSelect}:hover + & {
        color: ${COLORS.black};
    }
`;

const Chevrone = styled(Icon)`
    position: absolute;
    top: 10px;
    right: 8px;
    color: inherit;
    pointer-events: none;
`;

export default Select;
