import { useSelector, RootStateOrAny } from "react-redux";
import styled from "styled-components";
import { IHotelReservation } from "../../../../types/hotel";

const Wrapper = styled.section`
background: #f2f2f2;
padding: 16px;
border-radius: 8px;
span {
    font-weight: bold;
}

 h1 {
    margin-bottom: 8px;
    span {
        font-weight: normal;
        font-size: 14px;
    }
}
`;
const HotelInfo = () => {
    const hotelData = useSelector((state: RootStateOrAny) => state.Hotel.data) as IHotelReservation;

    return <Wrapper className="hotel-info">
        <h1>{hotelData.hotelName} <span>({hotelData?.hotelDetails?.city})</span></h1>

        <span>Giriş Tarihi:</span> {hotelData?.start_date?.toLocaleDateString()}{" - "}
        <span>Çıkış Tarihi:</span> {hotelData?.end_date?.toLocaleDateString()}{" - "}
        <span>Yetişkin:</span> {hotelData?.adult}{" - "}
        <span>Çocuk:</span> {hotelData?.child || 0}

    </Wrapper>
}

export default HotelInfo;