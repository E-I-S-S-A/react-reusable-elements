import React from "react";
import {
    Path,
    UseFormRegister,
    FieldValues,
    FieldError,
    RegisterOptions,
    UseFormReturn
} from "react-hook-form";
import styles from "./EissaCheckbox.module.css";

interface EissaCheckboxProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    rules?: RegisterOptions<T>;
    error?: FieldError;
    isTouched?: boolean;
}

const EissaCheckbox = <T extends FieldValues>(props: EissaCheckboxProps<T>) => {

    const { label, name, register, rules, error, isTouched } = props;

    return (
        <div className={styles.checkbox_container}>
            <div>
                <input
                    type="checkbox"
                    {...register(name, rules)}
                    className={`${styles.checkbox} ${isTouched && error?.message ? styles.error : ""}`}
                />
                <label className={styles.checkbox_label} htmlFor={name}>
                    {label}
                </label>
            </div>
            <div className={`${styles.errorMessage} ${isTouched && error?.message ? styles.showErrorMessage : styles.hideErrorMessage}`}> {error?.message}</div>
        </div>
    );
};

export default EissaCheckbox;
