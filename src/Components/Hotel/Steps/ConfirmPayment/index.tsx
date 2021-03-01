import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector, RootStateOrAny } from "react-redux";
import { useSetHotelReservationData, useSetHotelStep } from "../../../../store/hotel/actions";
import { IPaymentCardSolid, IPaymentCard, HotelReservationSolid } from "../../../../types/hotel";
import { bookHotel } from "../../../../services/hotel"
import Info from "./Info";
import CreditCard from "./CreditCard";
import Steper from "../../Steper"
import { Col, Container } from "../../../Layout";
import useHotelTotalPrice from "../../../../hooks/useHotelTotalPrice";
import { medias } from "../../../Layout";
const Wrapper = styled.section`
@media ${medias.md}{
.info{
    margin-left: 24px;
}
}
`;
const ConfirmPayment = () => {

    const hotelData = useSelector((state: RootStateOrAny) => state.Hotel.data) as HotelReservationSolid;
    const setHotelStep = useSetHotelStep();
    const setHotelReservationData = useSetHotelReservationData();
    const totalPrice = useHotelTotalPrice();

    const { paymentCard } = hotelData || {};

    const form = useForm<IPaymentCard>({
        defaultValues: paymentCard
    });
    const { control, errors, handleSubmit } = form;
    const submit = handleSubmit((data: IPaymentCardSolid) => {
        // @ts-ignore
        setHotelReservationData({ paymentCard: { ...data } });

        const end_date = ((hotelData.end_date).toISOString()).split("T")[0];
        const start_date = ((hotelData.start_date).toISOString()).split("T")[0];
        const payload = {
            hotel_id: parseInt(hotelData.hotel_id),
            adult: hotelData.adult,
            end_date,
            start_date,
            card_cvv: data.CVV + '',
            card_date_month: data.expirationMonth + '',
            card_date_year: data.expirationYear + '',
            card_name: data.name,
            card_number: data.number + '',
            child: hotelData.child,
            coupon_code: hotelData?.couponCode?.code,
            price: totalPrice.price,
            room_scenic: hotelData.room_scenic,
            room_type: hotelData.room_type,
        }

        bookHotel(payload).then(data => {
            setHotelReservationData({
                created: true
            });
            setHotelStep(4);
        }).catch(err => {
            alert("err");
        })

    }, (error) => {
        console.log(error);
    })
    return <Wrapper className="">
        <Container fluid>

            <Col span={12} md={7} sm={12} >
                <CreditCard form={form} />
            </Col>
            <Col span={12} md={5} sm={12} >
                <Info />
            </Col>
        </Container>
        <Steper onBack={() => { setHotelStep(2) }}
            forwardText="Ödemeyi Yap ve Bitir"
            onForward={() => {
                submit();
            }} />
    </Wrapper>
}

export default ConfirmPayment;