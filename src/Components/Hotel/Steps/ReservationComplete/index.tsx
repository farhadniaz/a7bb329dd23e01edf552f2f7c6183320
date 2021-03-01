import styled from "styled-components";
import Message from "./Message";
import PaymentInfo from "../ConfirmPayment/Info";
const Wrapper = styled.section`

`;
const ReservationComplete = () => {
    return <Wrapper className="">
        <Message />
        <PaymentInfo showCouponCodeInput={false} />
    </Wrapper>
}

export default ReservationComplete;