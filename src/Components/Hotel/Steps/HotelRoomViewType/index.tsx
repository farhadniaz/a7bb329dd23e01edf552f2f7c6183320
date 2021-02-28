import { useSelector, RootStateOrAny } from "react-redux";
import styled from "styled-components";
import RoomType from "./RoomType";
import RoomView from "./RoomScenic";
import HotelInfo from "./HotelInfo";
import { IHotelReservation } from "../../../../types/hotel";
import { useSetHotelReservationData, useSetHotelStep } from "../../../../store/hotel/actions";
import Steper from "../../Steper"
import { useForm, Controller } from "react-hook-form"
import { Col, Container } from "../../../Layout";
import FiledValidationError from "../../../Common/FiledValidationError";
const Wrapper = styled.section`

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
    const Difference_In_Time = hotelData.end_date.getTime() - hotelData.start_date.getTime();
    const Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));


    return <Wrapper className="">
        <HotelInfo />

        <Container fluid >

            <Col span={12}>
                Oda Tipi Seçimi  <FiledValidationError message="Please Select an item" error={errors.room_type} />
            </Col>
            <Controller
                control={control}
                render={({ onChange, value }) => {
                    return <>
                        {hotelData.hotelDetails?.room_type.map(item => {

                            return <Col key={item.id} span={4}>
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

        <Container>
            <Col span={12}>
                Manzara Seçimi  <FiledValidationError message="Please Select an item" error={errors.room_scenic} />
            </Col>
            <Controller
                control={control}
                render={({ onChange, value }) => {
                    return <>
                        {hotelData.hotelDetails?.room_scenic.map(item => {
                            return <Col key={item.id} span={4}> <RoomView key={item.id} data={item}
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
        <Steper onForward={submit} onBack={() => {
            setHotelStep(1)
        }} />
    </Wrapper>
}

export default HotelRoomViewType;