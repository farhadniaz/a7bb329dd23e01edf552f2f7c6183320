import { useSelector, RootStateOrAny } from "react-redux";
import styled from "styled-components";
import RoomType from "./RoomType";
import RoomView from "./RoomScenic";
import { IHotelReservation, IHotelDetails } from "../../../../types/hotel";
import { useSetHotelReservationData, useSetHotelStep } from "../../../../store/hotel/actions";
import Steper from "../../Steper"
const Wrapper = styled.section`

`;
const HotelInfo = () => {
    const hotelData = useSelector((state: RootStateOrAny) => state.Hotel.data) as IHotelReservation;

    return <Wrapper className="">
        {hotelData.hotelName}
        ({hotelData?.hotelDetails?.city})

        Giriş Tarihi: {hotelData?.start_date?.toLocaleDateString()} -
        Çıkış Tarihi: {hotelData?.end_date?.toLocaleDateString()} -
        Yetişkin: {hotelData?.adult}
        {hotelData?.child && <> -
        Çocuk:   {hotelData?.child}  </>}


    </Wrapper>
}

export default HotelInfo;