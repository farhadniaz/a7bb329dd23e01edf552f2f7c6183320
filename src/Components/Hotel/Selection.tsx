import { useSelector, RootStateOrAny } from "react-redux";
import StepBar from "./StepBar"
import ConfirmPayment from "./Steps/ConfirmPayment";
import HotelDate from "./Steps/HotelDate";
import ReservationComplete from "./Steps/ReservationComplete";
import HotelRoomViewType from "./Steps/HotelRoomViewType";
import { Container, Col } from "../Layout";

const StepComponenet = () => {
    const currentStep = useSelector((state: RootStateOrAny) => state?.Hotel?.currentStep);

    switch (currentStep) {
        case 1:
            return <HotelDate />;
        case 2:
            return <HotelRoomViewType />;
        case 3:
            return <ConfirmPayment />;
        case 4:
            return <ReservationComplete />;
        default:
            return <HotelDate />;
    }
}

const Selection = () => {
    return <Container fluid>
        <Col span={12}>
            <StepBar />
        </Col>
        <Col span={12}>
            <StepComponenet />
        </Col>
    </Container>

}

export default Selection;