import { FC, createContext, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
// @ts-ignore
import ModernCssReset from "modern-css-reset";

export const GlobalStyle = createGlobalStyle`
${ModernCssReset}
`;

const ContainerShiled = styled.div`${(props) => {
    return `
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    width:95%;
    @media (min-width:1200px) {
        max-width:1200px;
    }
    `;

}}`;

interface IContainerProps {
    gutter?: number;
}
const defaultGutter = 12;
const ContainerContext = createContext(defaultGutter);
export const Container: FC<IContainerProps> = (props) => {
    const { gutter = defaultGutter, children } = props;
    const { Provider } = ContainerContext;
    return <Provider value={gutter}>
        <ContainerShiled>
            {children}
        </ContainerShiled>
    </Provider>

}

interface IColProps {
    span: number;
    sm?: number;
    md?: number;
    lg?: number;
    xlg?: number;
}

export const Col = styled.div`${(props: IColProps) => {
    const gutter = useContext(ContainerContext);
    let { lg, md, sm, span, xlg } = props;
    const getSpace = (space?: number): string => space ? `width:${(space / gutter) * 100}%;` : '';

    const commonWidth = getSpace(span);
    const lgWidth = getSpace(lg);
    const mdWidth = getSpace(md);
    const xlgWidth = getSpace(xlg);
    const smWidth = getSpace(sm);
    // <576px	Small
    // ≥576px	Medium
    // ≥768px	Large
    // ≥992px	Extra large
    // ≥1200px
    return `
    ${commonWidth}
    @media (max-width: 576px) {
        ${smWidth}
    }
 
    @media (min-width: 576px) {
        ${mdWidth}
    }

    @media (min-width:768px) {
        ${lgWidth}
    }
    @media (min-width:1200px) {
        ${xlgWidth}
    }
    `;

}}`;

