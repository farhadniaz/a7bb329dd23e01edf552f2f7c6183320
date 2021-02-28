import { FC } from "react";
import styled from "styled-components";

import { gray, grayAlpha, grayBolka, grayMazo } from "../../styles/colors";
import { GrFormPrevious } from 'react-icons/gr';

const Wrapper = styled.section`
background:${gray};


    padding: 24px;
    border-radius: 12px;
    display: flex;

.step-bar{
    &__forward{
        margin:auto;
        margin-right:0px;
    }
    &__back{
        margin:auto;
        margin-left:0px;
    }
}
`;

interface IProps {
    onForward: () => void;
    onBack?: () => void;
}

const Steper: FC<IProps> = (props) => {
    const { onForward, onBack } = props;
    return <Wrapper className="step-bar">
        {onBack && <button onClick={onBack} className="step-bar__back"><GrFormPrevious /><GrFormPrevious />Geri</button>}
        {onForward && <button onClick={onForward} className="step-bar__forward">Kaydet ve Devm Et</button>}

    </Wrapper>
}

export default Steper;