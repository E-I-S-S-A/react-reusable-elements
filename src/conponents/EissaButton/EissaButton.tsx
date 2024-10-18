import React from 'react';
import styles from './EissaButton.module.css';
import EissaLoader from '../EissaLoader/EissaLoader';

interface EissaButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    isLoading?: boolean;
}

const EissaButton: React.FC<EissaButtonProps> = (props: EissaButtonProps) => {
    const { label, onClick, type = 'button', variant = 'primary', disabled = false, isLoading = false, } = props;

    return (
        <button
            className={`${styles.eissa_button} ${variant === 'primary' ? styles.primary : styles.secondary} ${disabled ? styles.disabled : ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled || isLoading}
        >
            {isLoading ? <EissaLoader varient={variant}/>
                : label}
        </button>
    );
};

export default EissaButton;
