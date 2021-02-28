import { FC, useState, useEffect } from "react";
import { UseFormMethods, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FiledValidationError from "../../../Common/FiledValidationError";
interface IDateRange {
    start?: Date;
    end?: Date;
}
interface IRangePickerProps {
    form: UseFormMethods
}

const RangePicker: FC<IRangePickerProps> = (props) => {
    const { form } = props;
    const { errors, setValue, register, control, watch } = form;
    const start_date = watch('start_date');
    const end_date = watch('end_date');

    useEffect(() => {
        register('start_date', { required: true, });
        register('end_date', { required: true, });
    }, [])

    return (
        <>
            <div className="date-picker-item">
                <label htmlFor="start-date">Giriş Tarihi</label>
                <Controller
                    render={({ onChange }) => <DatePicker
                        placeholderText="  /  / "
                        selected={start_date}
                        onChange={(date) => onChange(date as Date)}
                        selectsStart
                        startDate={start_date}
                        endDate={end_date}
                        id="start-date"
                    />
                    }
                    name="start_date"
                    control={control}
                />
                <FiledValidationError
                    error={errors.start_date}
                />
            </div>

            <div className="date-picker-item">
                <label htmlFor="end-date">Çıkış Tarihi</label>
                <Controller
                    render={({ onChange }) => <DatePicker
                        placeholderText="  /  / "
                        selected={end_date}
                        onChange={(date) => onChange(date as Date)}
                        selectsStart
                        startDate={end_date}
                        endDate={start_date}
                        id="start-date"
                    />
                    }
                    name="end_date"
                    control={control}

                />
                <FiledValidationError
                    error={errors.end_date}
                />
            </div>
        </>
    );
};


export default RangePicker;