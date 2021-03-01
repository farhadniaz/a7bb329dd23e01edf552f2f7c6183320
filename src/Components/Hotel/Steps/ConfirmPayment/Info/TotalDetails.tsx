import { ReactNode } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import styled from "styled-components";
import { HotelReservationSolid } from "../../../../../types/hotel";
import { formatPrice } from "../../../../../utils";
import useHotelTotalPrice from "../../../../../hooks/useHotelTotalPrice";

interface ITotalDetailsItem {
    title: ReactNode;
    value: ReactNode;
    subTitle?: ReactNode;
}
const TotalDetailsItem = (props: ITotalDetailsItem) => {
    const { title, value, subTitle } = props;
    return <div className="total-details__item">
        <span className="total-details__item__title">
            {title}
            <span>{subTitle}</span>
        </span>
        <span className="total-details__item__value">{value}</span>
    </div>
}

const TotalDetailsWrapper = styled.div`
padding: 16px;
background: white;
border-radius: 8px;
margin-top: 18px;

.total-details{
    &__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    &__title {
        font-weight: bold;
        span {
            font-weight: normal;
            margin-left: 4px;
        }
    }    
}
&__total {
    border-top: 1px solid;
    padding: 16px 0;
    text-align: center;
    margin: 16px -16px;
    font-weight: bold;
    margin-top: 32px;
    &__title {
        display: block;
        margin-bottom: 8px;
    }
    
    &_price {
        font-size: 28px;
    }
}
} 
`;

const TotalDetails = () => {
    const hotelData = useSelector((state: RootStateOrAny) => state.Hotel.data) as HotelReservationSolid;
    const totalHotelPrice = useHotelTotalPrice();
    const { price, totalOBJ } = totalHotelPrice;
    const { room_scenic, room_type, day } = totalOBJ;

    return <TotalDetailsWrapper className="total-details">
        <TotalDetailsItem
            title="Oda Fiyati"
            value={room_type?.price && formatPrice(room_type?.price)}
        />
        <TotalDetailsItem
            title="Fiyat Etki Orani"
            value={`+${room_scenic?.price_rate}%`}
        />

        <TotalDetailsItem
            title="Konaklama"
            subTitle={`(${day} Gun)`}
            value={formatPrice((room_type?.price || 0) * day * hotelData.adult)}
        />

        <TotalDetailsItem
            title={` Inidirim( ${hotelData.couponCode?.code || '---'}  )`}
            value={hotelData.couponCode?.discount_ammount ? `-${formatPrice(hotelData.couponCode?.discount_ammount)} TL)` : '---'}
        />
        <div className="total-details__total">
            <span className="total-details__total__title">TOPLAM TUTAR </span>
            <span className="total-details__total_price">{formatPrice(price)} TL</span>
        </div>
    </TotalDetailsWrapper>

}

export default TotalDetails;