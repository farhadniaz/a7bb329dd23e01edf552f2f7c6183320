import styled from "styled-components";
import { Roomtype } from "../../../../types/hotel";
import CardStyle from "./CardStyle";
const Wrapper = styled.label`
${CardStyle}

`;

interface IProps {
    data: Roomtype;
    days: number;
    selectedId?: number;
    onChange: (e: any) => void
}

const RoomType = (props: IProps) => {
    const { data, days, onChange, selectedId } = props;
    return <Wrapper className={`card ${selectedId == data.id ? "selected" : ''} `}>
        <input type="radio" name="room_type" value={data.id} onChange={onChange} />
        <span className="card__title" >{data.title}</span>
        <figure>
            <img src={data.photo} 
                alt={data.title} />
            <figcaption>{data.description}</figcaption>
        </figure>
        <div className="card__sub-info" >
            <span>{days} Gün<br />1 Yetişkin</span>
            <span className="card__sub-info__value">{Number((data.price).toFixed(1)).toLocaleString()} TL</span>
        </div>
    </Wrapper>
}

export default RoomType;