import { FC } from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import { gray } from "../../styles/colors";
import { AiOutlineDoubleLeft } from 'react-icons/ai';

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
    forwardText?: string;
    backText?: string;
}

const Steper: FC<IProps> = (props) => {
    const { onForward, forwardText = "Kaydet ve Devm Et", onBack, backText = "Geri" } = props;
    return <Wrapper className="step-bar">
        {onBack &&
            <Button onClick={onBack} kind="primary" className="step-bar__back"
                icon={<AiOutlineDoubleLeft />}>{backText}</Button>}
        {onForward && <Button kind="primary" onClick={onForward} className="step-bar__forward">{forwardText}</Button>}

    </Wrapper>
}

export default Steper;