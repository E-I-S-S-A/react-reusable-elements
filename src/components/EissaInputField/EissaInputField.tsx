import styles from "./EissaInputField.module.css";
import {
    Path,
    UseFormRegister,
    FieldValues,
    FieldError,
    RegisterOptions,
} from "react-hook-form";

interface EissaInputFieldProps<T extends FieldValues> {
    label?: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    rules?: RegisterOptions<T>;
    error?: FieldError;
    isTouched?: boolean;
    placeholder?: string;
    type?: "text" | "password",
    keepSpaceForError?: boolean,
    bg?: string,
    fontColor?: string
}

const EissaInputField = <T extends FieldValues>(
    props: EissaInputFieldProps<T>
) => {
    const { label, name, register, rules, error, isTouched, placeholder = "", type = "text", keepSpaceForError = true, bg, fontColor } = props;

    return (
        <div className={styles.input_container}>
            <div className={`${styles.input_wrapper} ${isTouched && error?.message && styles.error}`}>
                <input
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    {...register(name, rules)}
                    className={`${styles.inputField} ${label && styles.hide_placeholder}`}
                    style={{ backgroundColor: bg && bg, color: fontColor && fontColor }}
                />
                {
                    label &&
                    <label htmlFor={name} className={styles.inputFieldLabel} style={{ backgroundColor: bg && bg, color: fontColor && fontColor }}>{label}</label>
                }
            </div>
            <div className={`${!keepSpaceForError && styles.heightZero} ${styles.errorMessage} ${isTouched && error?.message ? styles.showErrorMessage : styles.hideErrorMessage}`}> {error?.message}</div>
        </div>
    );
};

export default EissaInputField;