import { FC, createContext, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
// @ts-ignore
import ModernCssReset from "modern-css-reset";
export const GlobalStyle = createGlobalStyle`
${ModernCssReset}
`;

interface IContainerProps {
    gutter?: number;
    style?: object;
    fluid?: boolean;
}
interface IColProps {
    span: number;
    sm?: number;
    md?: number;
    lg?: number;
    xlg?: number;
    tb?: number;
}


export const medias = {
    sm: `(max-width: 580px)`,
    tb: `(min-width: 581px)`,
    md: `(min-width: 768px)`,
    lg: `(min-width: 991px)`,
    xlg: `(min-width:1200px)`
};


const ContainerShiled = styled.div`${(props: IContainerProps) => {
    const { fluid } = props;
    return `
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    width: ${fluid ? "100%" : "90%"};
   
    @media ${medias.sm} {
        max-width:95%;
    }
 
    @media ${medias.tb}{
        max-width:95%;
    }

    @media ${medias.md}{
        max-width:95%;
    }

    @media ${medias.lg} {
        max-width:95%;
    }
    @media ${medias.xlg} {
        max-width:1200px;
    }
    `;

}}`;


const defaultGutter = 12;
const ContainerContext = createContext(defaultGutter);
export const Container: FC<IContainerProps> = (props) => {
    const { gutter = defaultGutter, children, style = {}, fluid = false } = props;
    const { Provider } = ContainerContext;
    return <Provider value={gutter} >
        <ContainerShiled style={style} fluid={fluid}>
            {children}
        </ContainerShiled>
    </Provider>

}

export const Col = styled.div`${(props: IColProps) => {
    const gutter = useContext(ContainerContext);
    let { lg, md, sm, span, xlg, tb } = props;
    const getSpace = (space?: number): string => space ? `width:${(space / gutter) * 100}%;` : '';

    const commonWidth = getSpace(span);
    const lgWidth = getSpace(lg);
    const mdWidth = getSpace(md);
    const xlgWidth = getSpace(xlg);
    const smWidth = getSpace(sm);
    const tbWidth = getSpace(tb);
    // <576px	Small
    // ≥576px	Medium
    // ≥768px	Large
    // ≥992px	Extra large
    // ≥1200px
    return `
    ${commonWidth}
  ${smWidth && `
  @media ${medias.sm} {
        ${smWidth}
    }
    `}

    ${mdWidth && `
    @media ${medias.md}{
        ${mdWidth}
    }`}

    ${tbWidth && `
    @media ${medias.tb}{
        ${tbWidth}
    }`}

    ${lgWidth && `
    @media ${medias.lg} {
        ${lgWidth}
    }`}

    ${xlgWidth && `
    @media ${medias.xlg} {
        ${xlgWidth}
    }`}
    `;

}}`;

