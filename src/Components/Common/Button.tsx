import { FC, SelectHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { blue, gray, grayAlpha, grayBolka, grayMazo } from "../../styles/colors"
interface IButton extends SelectHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode;
    kind?: "primary" | "default" | "dangger" | "success"
}

const ButtonWrapper = styled.button`
outline: none;
border: 0;
border-radius: 8px;
padding: 8px 16px;
cursor: pointer;
.icon {
        vertical-align: middle;
        margin-right: 4px;
    }
&[disabled] {
        opacity: .8;
    }
${(props: IButton) => {
        const { kind = "default" } = props;
        switch (kind) {
            case "success":
                return `
            background:green;
            color:white;
            `;
            case "dangger":
                return `
            background:red;
            color:white;
            `;
            case "primary":
                return `
                background:${blue};
                color:white;
                
                `;
        }
    }}
`;


const Steper: FC<IButton> = (props) => {
    const { icon, children, ...restProps } = props;
    return <ButtonWrapper  {...restProps}>
        <span className="icon">{icon}</span>
        {children}
    </ButtonWrapper>
}

export default Steper;