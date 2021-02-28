import { SelectHTMLAttributes, FC } from "react";
import { useGetHotels } from "../../../../services/hotel";

interface IHotelSelector extends SelectHTMLAttributes<HTMLSelectElement> {
    onChange: (data: any) => void
}
const HotelSelector: FC<IHotelSelector> = (props) => {
    const { data, error, loading } = useGetHotels();
    return loading ? <span>loading...</span> : <select {...props}

        onChange={(event) => {
            const id = event.target.value;
            const hotelOBJ = data?.find(item => item.id == id);
            props.onChange(hotelOBJ);
        }}
        placeholder="Rezervasyon yapmalistediginiz otel seciniz."
    >
        {(data || []).map(hotel => <option value={hotel.id}>{hotel.hotel_name}</option>)}
    </select>
}

export default HotelSelector;