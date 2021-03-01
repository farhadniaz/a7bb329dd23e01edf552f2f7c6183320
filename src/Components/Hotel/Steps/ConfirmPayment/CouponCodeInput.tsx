import { useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import styled from "styled-components";
import { IHotelReservation } from "../../../../types/hotel";
import { useSetHotelReservationData } from "../../../../store/hotel/actions";
import { getCouponData } from "../../../../services/hotel";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../../../Common/Button";
const CouponCodeInputWrapper = styled.div`
min-height: 80px;
    background: white;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    justify-content: space-between;

   &>* {
        margin-top: auto;
        margin-bottom: auto;
    }
    .error{
        display:block;
        color:red;
    }
.coupon-code-input__btn {
    white-space: nowrap;
    width: 150px;
    text-align: center;
}

.coupon-code-input__input-wrapper input {
    max-width: 100%;
}

.coupon-code-input__input-wrapper {
    flex: 1;
    width: 50%;
    margin-right: 16px;
}
`;

const CouponCodeInput = () => {
    const hotelData = useSelector((state: RootStateOrAny) => state.Hotel.data) as IHotelReservation;
    const setHotelReservationData = useSetHotelReservationData();
    const [value, setValue] = useState<string>(hotelData?.couponCode?.code || '');
    const [loading, setLoading] = useState<boolean>(false);
    const [inValidCode, setInValidCode] = useState<boolean>(false);
    const [isExpired, setIsExpired] = useState<boolean>(false);

    const clear = () => {
        setValue('')
        setLoading(false);
        setInValidCode(false);
        setIsExpired(false);
        setHotelReservationData({
            couponCode: undefined
        });
    }
    const validate = () => {
        setLoading(true);
        getCouponData(value).then(code => {
            if (code) {
                const ex = new Date(code.expiration_at);
                const today = new Date();
                const isValid = (ex.getTime() > today.getTime());
                debugger;
                if (isValid) {
                    setHotelReservationData({
                        couponCode: code
                    });

                    setInValidCode(false);
                    setIsExpired(false);
                } else {
                    setIsExpired(true)
                    setInValidCode(false);
                }
            } else {
                setIsExpired(false);
                setInValidCode(true);
            }
            setLoading(false);
        }).catch(error => {
            alert("error")
            setLoading(false);
        })

    }
    return <CouponCodeInputWrapper className="coupon-code-input">
        <div className="coupon-code-input__input-wrapper">


            <input placeholder="Kupon Kodu "

                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            {inValidCode && <span className="error">Kod geçersiz</span>}
            {isExpired && <span className="error">Kodun süresi doldu</span>}
        </div>
        {hotelData?.couponCode ? <Button className="coupon-code-input__btn"
            disabled={loading} onClick={clear} icon={<AiOutlineClose />}
            kind="success"
        >Kodu Değiştir  </Button> :
            <Button
            kind="primary"
                className="coupon-code-input__btn"
                disabled={!value || loading}
                onClick={validate}

            >Kodu Kullan</Button>
        }

    </CouponCodeInputWrapper>
}




export default CouponCodeInput;