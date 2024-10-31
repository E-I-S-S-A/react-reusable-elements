import styles from "./EissaInputField.module.css";
import {
    Path,
    UseFormRegister,
    FieldValues,
    FieldError,
    RegisterOptions,
} from "react-hook-form";

interface EissaInputFieldProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    rules?: RegisterOptions<T>;
    error?: FieldError;
    isTouched?: boolean;
    placeholder?: string;
    type?: "text" | "password"
}

const EissaInputField = <T extends FieldValues>(
    props: EissaInputFieldProps<T>
) => {
    const { label, name, register, rules, error,isTouched ,placeholder = "", type="text" } = props;
    
    return (
        <div className={styles.input_container}>
            <div className={`${styles.input_wrapper} ${isTouched && error?.message && styles.error}`}>
                <input
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    {...register(name, rules)}
                    className={styles.inputField}
                />
                <label htmlFor={name} className={styles.inputFieldLabel}>{label}</label>
            </div>
            <div className={`${styles.errorMessage} ${isTouched && error?.message ? styles.showErrorMessage: styles.hideErrorMessage}`}> {error?.message}</div>
        </div>
    );
};

export default EissaInputField;