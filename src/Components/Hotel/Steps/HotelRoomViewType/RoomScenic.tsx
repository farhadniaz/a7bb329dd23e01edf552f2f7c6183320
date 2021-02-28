
import styled from "styled-components";
import { Roomscenic } from "../../../../types/hotel";
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
    data: Roomscenic;
    selectedId?: number;
    onChange: (e: any) => void
}
const RoomScenic = (props: IProps) => {
    const { data, selectedId, onChange } = props;
    return <Wrapper className={`${selectedId == data.id ? "selected" : ''} `}>
        <input type="radio" name="room_scenic" value={data.id} onChange={onChange} />
        {data.title}
        <img src={data.photo} />
        Fiyat Etki Oranı    +{data.price_rate}%
    </Wrapper>
}

export default RoomScenic;