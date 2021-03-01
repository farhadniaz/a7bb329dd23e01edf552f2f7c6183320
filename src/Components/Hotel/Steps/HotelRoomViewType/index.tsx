import { useSelector, RootStateOrAny } from "react-redux";
import styled from "styled-components";
import RoomType from "./RoomType";
import RoomView from "./RoomScenic";
import HotelInfo from "./HotelInfo";
import { getDateDiffInDay } from "../../../../utils";
import { IHotelReservation } from "../../../../types/hotel";
import { useSetHotelReservationData, useSetHotelStep } from "../../../../store/hotel/actions";
import Steper from "../../Steper"
import { useForm, Controller } from "react-hook-form"
import { Col, Container } from "../../../Layout";
import FiledValidationError from "../../../Common/FiledValidationError";
const Wrapper = styled.section`
.hotel-info {
    margin-bottom: 24px;
}
.line {
    height: 2px;
    width: 100%;
    background: #f2f2f2;
    display: block;
    margin: 10px 0;
}
`;
const HotelRoomViewType = () => {
    const hotelData = useSelector((state: RootStateOrAny) => state.Hotel.data) as IHotelReservation;
    const setHotelStep = useSetHotelStep();
    const setHotelReservationData = useSetHotelReservationData();
    const { room_type, room_scenic } = hotelData || {};
    const defaultValues = { room_type, room_scenic };

    const { control, errors, handleSubmit } = useForm<typeof defaultValues>({
        defaultValues: defaultValues
    });

    const submit = handleSubmit((data) => {
        // @ts-ignore
        setHotelReservationData(data);
        setHotelStep(3);
    }, () => {
    })
    //  @ts-ignore
    const Difference_In_Days = getDateDiffInDay(hotelData.start_date, hotelData.end_date);

    return <Wrapper className="">
        <HotelInfo />

        <Container fluid >

            <Col span={12}>
                Oda Tipi Seçimi  <FiledValidationError message="Please Select an item" error={errors.room_type} />
                <span className="line"></span>
            </Col>
            <Controller
                control={control}
                render={({ onChange, value }) => {
                    return <>
                        {hotelData.hotelDetails?.room_type.map(item => {

                            return <Col key={item.id} span={6} md={4} sm={12} >
                                <RoomType data={item} days={Difference_In_Days} onChange={(e: any) => {
                                    onChange(e.target.value);
                                }}
                                    selectedId={value} />
                            </Col>
                        })} </>
                }}
                name="room_type"
                rules={{ required: true }}
            />

        </Container>

        <Container fluid>
            <Col span={12}>
                Manzara Seçimi  <FiledValidationError message="Please Select an item" error={errors.room_scenic} />
                <span className="line"></span>
            </Col>
            <Controller
                control={control}
                render={({ onChange, value }) => {
                    return <>
                        {hotelData.hotelDetails?.room_scenic.map(item => {
                            return <Col key={item.id} span={6} md={4} sm={12}>
                                <RoomView key={item.id} data={item}
                                    onChange={(e: any) => {
                                        onChange(e.target.value);
                                    }}
                                    selectedId={value}
                                /></Col>
                        })} </>
                }}
                name="room_scenic"
                rules={{ required: true }}
            />
        </Container>
        <Steper
            forwardText={hotelData?.created ? "Güncelle ve Devm Et" : undefined}
            onForward={submit}
            onBack={() => {
                setHotelStep(1)
            }} />
    </Wrapper>
}

export default HotelRoomViewType;