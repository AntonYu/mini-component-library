import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
    small: {
        fontSize: "14px",
        iconSize: 14,
        iconMargin: 11,
    },
    large: {
        fontSize: "18px",
        iconSize: 18,
        iconMargin: 17,
    },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const styles = SIZES[size];
    if (!styles) {
        throw new Error(`No styles for size ${size}.`);
    }

    return (
        <Wrapper style={{ "--width": `${width}px` }}>
            <Label>
                <InputWrapper
                    style={{
                        "--margin": `${styles.iconMargin + styles.iconSize}px`,
                    }}
                >
                    <Input
                        type="text"
                        placeholder={placeholder}
                        style={{
                            "--fontSize": styles.fontSize,
                            "--margin": `${styles.iconMargin + styles.iconSize}px`,
                        }}
                    />
                </InputWrapper>
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
    width: var(--width);
`;

const Input = styled.input`
    font-size: var(--fontSize);
    border: 0;
    font-weight: 700;
    width: 100%;

    &::placeholder {
        font-weight: normal;
        color: ${COLORS.gray500};
    }

    &:focus {
        outline: none;
    }
`;

const Label = styled.div`
    width: 100%;
    display: block;
    position: relative;
    color: ${COLORS.gray700};

    .focus-within {
        outline: 2px solid ${COLORS.primary};
        outline-offset: 4px;
        border-radius: 2px;
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

const InputWrapper = styled.div`
    margin-left: var(--margin);
`;

export default IconInput;
