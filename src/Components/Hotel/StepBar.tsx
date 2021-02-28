import { StepItem, Steps } from "../Common/Steps";
import {useSelector,RootStateOrAny} from "react-redux";

import styled from "styled-components";
import { gray, grayAlpha, grayBolka, grayMazo } from "../../styles/colors";
import { FaBed } from 'react-icons/fa';
import { GoCalendar } from 'react-icons/go';
import { MdPayment } from 'react-icons/md';


const Wrapper = styled.div`
background: ${gray};
padding: 16px;
padding-top: 20px;
border-radius: 12px;
`;

const StepBar = () => {
const currentStep=useSelector((state:RootStateOrAny)=> state?.Hotel?.currentStep);

    return <Wrapper className="step-bar-container" >
        <Steps current={currentStep-1}>
            <StepItem icon={<GoCalendar />} title="sdfdsfds" />
            <StepItem icon={<FaBed />} title="sdfdsfds" />
            <StepItem icon={<MdPayment />} title="sdfdsfds" />
        </Steps>
    </Wrapper>
}

export default StepBar;