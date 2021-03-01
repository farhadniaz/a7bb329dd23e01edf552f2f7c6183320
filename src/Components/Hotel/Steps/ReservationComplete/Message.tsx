import { useSelector, RootStateOrAny } from "react-redux";
import styled from "styled-components";
import { FaRegCalendarCheck } from "react-icons/fa";
import Button from "../../../Common/Button";
import { useResetHotelState, useSetHotelStep } from "../../../../store/hotel/actions";
import { HotelReservationSolid } from "../../../../types/hotel"
import { cancelBookedHotel } from "../../../../services/hotel";
import { medias } from "../../../Layout"

const Wrapper = styled.section`
text-align: center;
padding: 24px;
border: 1px solid;
border-radius: 16px;
margin-bottom: 34px;

.icon {
    font-size: 50px;
    color: green;
    margin: auto;
}


.commands{
    margin: 24px 0;
    flex-direction: row;
}

.message p {
    margin: 24px 0;
}

button {
    margin: auto 8px;
    line-height: 1;
    width: 100%;
    margin: 12px 0;
}

    
@media ${medias.md}{

    
    .commands {
        flex-direction: column;
    }
    
     button {
        width: auto;
        margin: 12px;
    }
    
}
`;
const ReservationCompleteMessage = () => {
    const restHotelState = useResetHotelState();
    const setHotelStep = useSetHotelStep();
    const hotelData = useSelector((state: RootStateOrAny) => state.Hotel.data) as HotelReservationSolid;

    const cancel = () => {

        if (hotelData.created && window.confirm("Press a button!")) {
            cancelBookedHotel(hotelData.hotel_id).then(res => {
                restHotelState();
            }).catch(err => {
                console.log(err);
                alert("error ")
            })
        }
    }

    return <Wrapper className="message">
        <span className="icon">
            <FaRegCalendarCheck />
        </span>
        <h1>
            Rezervasyon Kaydı alinmistir
            </h1>
        <p>
            Rezervasyon ozetiniz asagidaki gibidir. Rezervasyon kaydinizda degisiklik veya <br />
        yeni rezervasyon yapmak icin asagidaki linkleri kullanabilirsiniz.
        </p>
        <div className="commands">
            <Button kind="primary" onClick={() => restHotelState()}>Yeni Rezervasyon Yap</Button>
            <Button kind="primary" onClick={() => setHotelStep(1)}>Rezervasyonu Guncelle</Button>
            <Button kind="primary" onClick={() => cancel()}>Rezervasyon Iptal Et</Button>
        </div>
    </Wrapper>
}

export default ReservationCompleteMessage;