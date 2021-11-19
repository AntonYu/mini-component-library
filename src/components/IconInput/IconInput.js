import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
    small: {
        fontSize: `${14 / 16}rem`,
        iconSize: 16,
        height: 24,
        borderThikness: 1,
    },
    large: {
        fontSize: `${18 / 16}rem`,
        iconSize: 24,
        height: 36,
        borderThikness: 2,
    },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const styles = SIZES[size];
    if (!styles) {
        throw new Error(`No styles for size ${size}.`);
    }

    return (
        <Wrapper>
            <VisuallyHidden>{label}</VisuallyHidden>
            <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
                <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
            </IconWrapper>
            <Input
                type="text"
                placeholder={placeholder}
                style={{
                    "--width": width + "px",
                    "--height": styles.height + "px",
                    "--fontSize": styles.fontSize,
                    "--borderThikness": styles.borderThikness + "px",
                }}
            />
        </Wrapper>
    );
};

const Wrapper = styled.label`
    display: block;
    position: relative;
    color: ${COLORS.gray700};

    &:hover {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: var(--size);
    height: var(--size);
`;

const Input = styled.input`
    width: var(--width);
    height: var(--height);
    padding-left: var(--height);
    font-size: var(--fontSize);
    border: 0;
    border-bottom: var(--borderThikness) solid ${COLORS.black};
    outline-offset: 2px;
    color: inherit;
    font-weight: 700;

    &::placeholder {
        color: ${COLORS.gray500};
        font-weight: 400;
    }
`;

export default IconInput;
