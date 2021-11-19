import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
    small: {
        fontSize: "14px",
        iconSize: 14,
        iconPadding: 11,
    },
    large: {
        fontSize: "18px",
        iconSize: 18,
        iconPadding: 17,
    },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const styles = SIZES[size];
    if (!styles) {
        throw new Error(`No styles for size ${size}.`);
    }

    return (
        <Wrapper style={{ "--max-width": `${width}px` }}>
            <Input
                type="text"
                placeholder={placeholder}
                style={{
                    "--fontSize": styles.fontSize,
                    "--padding": `${styles.iconPadding + styles.iconSize}px`,
                }}
            />

            <Label>
                <IconWrapper style={{ "--width": `${styles.iconSize}px` }}>
                    <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
                </IconWrapper>
                <VisuallyHidden>{label}</VisuallyHidden>
            </Label>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border-bottom: 1px solid ${COLORS.black};
    padding-bottom: 2px;
    max-width: var(--max-width);
    width: 100%;
    position: relative;
`;

const Input = styled.input`
    font-size: var(--fontSize);
    border: 0;
    font-weight: 700;
    width: 100%;
    padding-left: var(--padding);
    color: ${COLORS.gray700};

    &:hover {
        color: ${COLORS.black};
    }

    &::placeholder {
        font-weight: normal;
        color: ${COLORS.gray500};
    }

    &:focus {
        outline: none;
    }
`;

const Label = styled.label`
    width: 100%;
    display: block;
    position: relative;
    color: ${COLORS.gray700};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    ${Input}:focus + & {
        outline: 2px solid ${COLORS.primary};
        outline-offset: 4px;
        border-radius: 2px;
    }

    ${Input}:hover + & {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: var(--width);
    height: var(--width);
`;

export default IconInput;
