import styled from "styled-components";
import { UseFormMethods, Controller } from "react-hook-form";
import { IPaymentCard } from "../../../../types/hotel"
import FiledValidationError from "../../../Common/FiledValidationError";
import { Col, Container } from "../../../Layout";
const Wrapper = styled.section`
margin-bottom: 32px;
.credit-card-form {
    border: 1px solid;
    padding: 24px;
    position: relative;
    margin-top: 40px;
    padding-top: 48px;
}

.credit-card-form__title {
    top: -16px;
    font-size: 20px;
    background: white;
    display: inline-block;
    position: absolute;
    font-weight: bold;
}



.credit-card-form__item {
    width: 100%;
    display: block;
    margin-bottom: 30px;
}

.credit-card-form__item__title {
    display: block;
    margin-bottom: 8px;
}

.credit-card-form__item input {
    width: 100%;
}

select {
    width: 83%;
}
`;
interface ICreditCardViewProps {
    data: IPaymentCard
}

export const formatCardNumber = (value: string) => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
    const onlyNumbers = value.replace(/[^\d]/g, '')

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
        [$1, $2, $3, $4].filter(group => !!group).join(' ')
    )
}


const CreditCardViewWrapper = styled.section`
background: #f3f3f3;
padding: 16px 12px;
border-radius: 20px;
.credit-card-view{
    &__main-img{
    width:100%;
}
}


.credit-card-view__number {
    display: block;
    text-align: justify;
    font-size: 40px;
    font-weight: bold;
}

.credit-card-view__sub {
    display: flex;
    justify-content: space-between;
}

.credit-card-view__sub span {margin: auto;margin-left: 0;}

`;
const CreditCardView = (props: ICreditCardViewProps) => {
    const { expirationMonth, expirationYear, CVV, name, number } = props.data;
    return <CreditCardViewWrapper className="credit-card-view">
        <img src={process.env.PUBLIC_URL + '/black-card.png'} className="credit-card-view__main-img" />

        <span className="credit-card-view__number">{number ? formatCardNumber(number + '') : "3454 5435 3453 4534"}</span>
        <span className="credit-card-view__name">{name || "xxxxxxxxxxxxxxxx"}</span>
        <div className="credit-card-view__sub">
            <span>{expirationMonth}/{expirationYear}</span>
            <img src={process.env.PUBLIC_URL + '/card-icon.png'} />
        </div>
    </CreditCardViewWrapper>
}
interface IProps {
    form: UseFormMethods<IPaymentCard>;
}
const CreditCard = (props: IProps) => {
    const { form } = props;
    const { errors, control, watch } = form;
    const currentYear = (new Date()).getUTCFullYear();

    const alldata = watch();

    return <Wrapper className="credit-card">

        <CreditCardView data={alldata} />

        <div className="credit-card-form">
            <span className="credit-card-form__title">Kart Karti Bilgileri</span>
            <Container fluid>
                <Col span={12}>
                    <label className="credit-card-form__item">
                        <span className="credit-card-form__item__title">Kartin Uzerindeki Isem</span>
                        <Controller
                            control={control}
                            as={<input placeholder="Kartin Uzerindeki Isem Giriniz" />}
                            rules={{ required: true }}
                            name="name"
                        />
                        <FiledValidationError error={errors.name} />
                    </label>

                </Col>
                <Col span={12}>
                    <label className="credit-card-form__item">
                        <span className="credit-card-form__item__title">Kartin Numarasi</span>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => <input
                                value={value}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    if ((v + '').length <= 16) {
                                        onChange(v);
                                    }
                                }}
                                type="number"

                                placeholder="Kartin Numarasini Giriniz" />}
                            rules={{ required: true, minLength: 16, maxLength: 16 }}
                            name="number"
                        />
                        <FiledValidationError error={errors.number} />
                    </label>

                </Col>
                <Col span={8}>
                    <span className="credit-card-form__item__title">Kart Son Kullanma Tarihi</span>
                    <Container>
                        <Col span={6}>
                            <Controller
                                control={control}
                                as={<select placeholder="Ay">
                                    <option disabled selected>Ay</option>
                                    {Array(12).fill(1).map((item, index) => {
                                        return <option key={index} value={index + 1}>{index + 1}</option>
                                    })}
                                </select>}
                                rules={{ required: true }}
                                name="expirationMonth"
                            />
                            <FiledValidationError error={errors.expirationMonth} />

                        </Col>
                        <Col span={6}>

                            <Controller
                                control={control}
                                as={<select placeholder="Yil">
                                    <option disabled selected>Yil</option>
                                    {Array(20).fill(1).map((item, index) => {
                                        return <option key={index} value={index + currentYear}>{index + currentYear}</option>
                                    })}
                                </select>}
                                rules={{ required: true }}
                                name="expirationYear"
                            />

                            <FiledValidationError error={errors.expirationYear} />
                        </Col>
                    </Container>




                </Col>
                <Col span={4}>

                    <label className="credit-card-form__item">
                        <span className="credit-card-form__item__title">CVV</span>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => <input
                                type="number"
                                value={value}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    if ((v + '').length <= 4) {
                                        onChange(v);
                                    }
                                }} placeholder="CVV Giriniz" />}
                            rules={{ required: true, minLength: 3, maxLength: 4 }}
                            name="CVV"
                        />
                        <FiledValidationError error={errors.CVV} />
                    </label>


                </Col>
            </Container>
        </div>








    </Wrapper>
}

export default CreditCard;