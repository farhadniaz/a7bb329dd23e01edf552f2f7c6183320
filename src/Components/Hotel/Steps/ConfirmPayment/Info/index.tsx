import { FC, useMemo } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import styled from "styled-components";
import { IHotelReservation } from "../../../../../types/hotel";
import CouponCodeInput from "../CouponCodeInput";
import TotalDetails from "./TotalDetails";

const Wrapper = styled.section`
    height: 100%;
    background: #f3f3f3;
    
    border-radius: 24px;
    padding: 24px;

    .coupon-code-input{
        margin-top: 16px;
    
    }
    
     h1 {
        font-size: 28px;
        margin-bottom: 24px;
        span {
            font-weight: normal;
            font-size: 20px;
        }
    }
  
`;
interface InfoItemProps {
    title: string;

}
const InfoItemWrapper = styled.div`
    background: white;
    border-radius: 8px;
    width: calc(50% - 16px);
    display: inline-block;
    margin: 8px;
    padding: 8px;
    text-align: center;
.info__item__title {
    display: block;
    font-weight: bold;
}



`;
const InfoItem: FC<InfoItemProps> = (props) => {
    const { title, children } = props;
    return <InfoItemWrapper className="info__item">
        <span className="info__item__title">{title}</span>
        {children}
    </InfoItemWrapper>
}

interface IProps {
    showCouponCodeInput?: boolean;
}
const Info = (props: IProps) => {
    const { showCouponCodeInput = true } = props;
    const hotelData = useSelector((state: RootStateOrAny) => state.Hotel.data) as IHotelReservation;

    const room_scenic = useMemo(() => (hotelData.hotelDetails?.room_scenic.find(r => r.id == hotelData.room_scenic)), [hotelData.room_scenic]);
    const room_type = useMemo(() => (hotelData.hotelDetails?.room_type.find(r => r.id == hotelData.room_type)), [hotelData.room_type]);


    return <Wrapper className="info">
        <h1>{hotelData.hotelName} <span>({hotelData?.hotelDetails?.city})</span></h1>
        <InfoItem title="Giriş Tarihi">
            {hotelData?.start_date?.toLocaleDateString()}
        </InfoItem>
        <InfoItem title="Çıkış Tarihi">
            {hotelData?.end_date?.toLocaleDateString()}
        </InfoItem>
        <InfoItem title="Yetişkin">
            {hotelData?.adult}
        </InfoItem>
        <InfoItem title="Çocuk">
            {hotelData?.child}
        </InfoItem>

        <InfoItem title="Oda Tipi">
            {room_type?.title}
        </InfoItem>

        <InfoItem title="Manzara">
            {room_scenic?.title}
        </InfoItem>
        {showCouponCodeInput && <CouponCodeInput />}

        <TotalDetails />
    </Wrapper>
}

export default Info;