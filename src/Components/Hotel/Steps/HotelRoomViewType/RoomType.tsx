import styled from "styled-components";
import { Roomtype } from "../../../../types/hotel";
const Wrapper = styled.label`
padding: 24px;
border: 1px solid #ccc;
border-radius: 16px;
margin: 8px;
margin-bottom: 16px;
display: block;
input[type="radio"] {
    display: none;
}

&.selected {
    border-color: red;
}
`;

interface IProps {
    data: Roomtype;
    days: number;
    selectedId?: number;
    onChange: (e: any) => void
}

const RoomType = (props: IProps) => {
    const { data, days, onChange, selectedId } = props;
    return <Wrapper className={`${selectedId == data.id ? "selected" : ''} `}>
        <input type="radio" name="room_type" value={data.id} onChange={onChange} />
        <span>{data.title}</span>
        <img src={data.photo} />
        <div>
            <span>{days}<br />1 Yetişkin</span>
            <span>{Number((data.price).toFixed(1)).toLocaleString()} TL</span>
        </div>
    </Wrapper>
}

export default RoomType;