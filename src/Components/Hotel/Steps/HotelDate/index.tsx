import { useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useForm, Controller } from "react-hook-form"
import HotelSelector from "./HotelSelector";
import RangePicker from "./RangePicker";
import Wrapper from "./style";
import { getHotelDetails } from "../../../../services/hotel";
import Steper from "../../Steper"
import { IHotelReservation, IHotelDetails } from "../../../../types/hotel";
import { useSetHotelReservationData, useSetHotelStep } from "../../../../store/hotel/actions";
import FiledValidationError from "../../../Common/FiledValidationError";

import { IHotel } from "../../../../types/hotel";

const HotelDate = () => {

    const hotelData = useSelector((state: RootStateOrAny) => state.Hotel.data) as IHotelReservation;

    const [hotelsWithDetails, setHotelsWithDetails] = useState<undefined | IHotelDetails[]>(undefined);
    const [hotelDetail, setHotelDetail] = useState<undefined | IHotelDetails>(hotelData?.hotelDetails);
    const [hotelName, setHotelName] = useState<undefined | string>(hotelData?.hotelName);

    const setHotelReservationData = useSetHotelReservationData();
    const setStep = useSetHotelStep();

    const { hotel_id, start_date, adult, end_date, child } = hotelData || {};
    const defaultValues = { hotel_id, start_date, adult, end_date, child };

    const form = useForm<typeof defaultValues>({
        defaultValues: defaultValues
    });

    const { handleSubmit, control, watch, errors } = form;
    const hotelId = watch("hotel_id");

    useEffect(() => {
        if (!hotelsWithDetails && hotelId) {

            getHotelDetails().then(data => {
                setHotelsWithDetails(data);
                const h = data.find(h => h.hotel_id == parseInt(hotelId));
                setHotelDetail(h);
            });

        } else {
            if (hotelId) {
                const h = (hotelsWithDetails || []).find(h => h.hotel_id == parseInt(hotelId));
                setHotelDetail(h);
            } else {
                setHotelDetail(undefined);
            }
        }
    }, [hotelId])



    const applyData = (data: IHotelReservation) => {

       
        setHotelReservationData({
            ...data,
            hotelName,
            hotelDetails: hotelDetail
        });
        setStep(2)
    }
    const handelError = (err: any) => {
        console.log(err);
    }
    const submit = handleSubmit(applyData, handelError);

    const childStatus = hotelDetail ? hotelDetail?.child_status : null;
    return <>
        <Wrapper className="hotel-date-wrapper">
            <Controller
                name="hotel_id"
                control={control}
                render={({ onChange, value }) => <HotelSelector
                    onChange={(data: IHotel) => {
                        onChange(data.id);
                        setHotelName(data.hotel_name);
                    }}
                    value={value}
                    style={{ width: "100%" }} />}
                rules={{ required: true }}
            />
            <FiledValidationError error={errors.hotel_id} />
            <div className="hotel-date-wrapper__inner">
                {/** 
                 * 
                @ts-ignore */}
                <RangePicker form={form} />
                <div className="hotel-date__item">
                    <label htmlFor="adult">Yetişkin Sayısı</label>
                    <Controller
                        name="adult"
                        control={control}
                        as={<select id="adult"
                        >
                            <option selected disabled>Yetişkin</option>
                            {Array(hotelDetail?.adult || 6)
                                .fill(1)
                                .map((item, index) => <option value={index} key={index}>{index}</option>)}
                        </select>}
                        rules={{ required: true }}
                    />
                    <FiledValidationError error={errors.adult} />
                </div>
                <div className="hotel-date__item">
                    <label htmlFor="child"> Çocuk Sayısı</label>
                    <Controller
                        name="child"
                        control={control}
                        as={<select id="child"
                            disabled={childStatus == null ? true : !hotelDetail?.child_status}
                        >
                            <option selected disabled>Çocuk</option>
                            {Array(6).fill(1).map((item, index) => <option value={index} key={index}>{index}</option>)}
                        </select>}
                    />
                    {childStatus == null ? null : childStatus ? <span>çocuk kabul dur</span> : <span>Çocuk ziyaretçi kabul edilmiyor!</span>}
                </div>
            </div>
        </Wrapper>
        <Steper onForward={submit}

            forwardText={hotelData?.created ? "Güncelle ve Devm Et" : undefined}
        />
    </>
}

export default HotelDate;