
import styled from "styled-components";
import { Roomscenic } from "../../../../types/hotel";
import CardStyle from "./CardStyle";
const Wrapper = styled.label`
${CardStyle}
`;
interface IProps {
    data: Roomscenic;
    selectedId?: number;
    onChange: (e: any) => void
}
const RoomScenic = (props: IProps) => {
    const { data, selectedId, onChange } = props;
    return <Wrapper className={`card ${selectedId == data.id ? "selected" : ''} `}>
        <input type="radio" name="room_scenic" value={data.id} onChange={onChange} />
        <span className="card__title">{data.title}</span>
        <figure>
            <img src={data.photo}
                alt={data.title} />
            <figcaption>{data.title}</figcaption>
        </figure>

        <div className="card__sub-info">
            <span>Fiyat Etki Oranı</span>
            <span className="card__sub-info__value">+{data.price_rate}%</span>
        </div>
    </Wrapper>
}

export default RoomScenic;