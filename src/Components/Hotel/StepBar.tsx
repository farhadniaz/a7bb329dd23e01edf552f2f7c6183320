import { StepItem, Steps } from "../Common/Steps";
import { useSelector, RootStateOrAny } from "react-redux";

import styled from "styled-components";
import { gray, grayAlpha, grayBolka, grayMazo } from "../../styles/colors";
import { FaBed } from 'react-icons/fa';
import { GoCalendar } from 'react-icons/go';
import { MdPayment } from 'react-icons/md';
import { medias } from "../Layout";

const Wrapper = styled.div`
background: ${gray};
padding: 16px;
padding-top: 20px;
border-radius: 12px;
.steps__item__title {
    display: none;
}
@media ${medias.md}{
   .steps__item__title {
        display: block;
    }
}`;

const StepBar = () => {
    const currentStep = useSelector((state: RootStateOrAny) => state?.Hotel?.currentStep);

    return currentStep < 4 ? <Wrapper className="step-bar-container" >
        <Steps current={currentStep - 1}>
            <StepItem icon={<GoCalendar />} title="Otel ve Tarih Secim" />
            <StepItem icon={<FaBed />} title="Oda Tipi ve Manzara Secim" />
            <StepItem icon={<MdPayment />} title="Onizleme ve Odeme Islemleri" />
        </Steps>
    </Wrapper> : null;
}

export default StepBar;