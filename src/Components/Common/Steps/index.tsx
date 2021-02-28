import { Children, FC, isValidElement, cloneElement, ReactNode } from "react";
import { Wrapper } from "./style";

interface IStepProps {
    icon: ReactNode,
    title: ReactNode;
    disabled?: boolean;
}
export const StepItem = (props: IStepProps) => {
    //@ts-ignore
    const { disabled, icon, title, index, current } = props;
    const isCurrent = index == current;
    const passed = index < current;
    return <span className={`steps__item ${passed ? 'passed' : ''} ${disabled ? 'disabled' : ''} ${isCurrent ? 'current' : ''}`}>
        <span className="steps__item__info">
            <span className="steps__item__icon">{icon}</span>
            <span className="steps__item__title">{title}</span>
        </span>
    </span>
}

interface IProps {
    current: number;
}
export const Steps: FC<IProps> = (props) => {
    const { current, children } = props;
    const childrenWithProps = Children.map(children, (child, index) => {
        if (isValidElement(child)) {
            return cloneElement(child, { index, current });
        }
        return child;
    });
    return <Wrapper className="steps">
        {childrenWithProps}
    </Wrapper>
}
