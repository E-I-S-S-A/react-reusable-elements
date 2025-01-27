import React from 'react';
import styles from './EissaButton.module.css';
import EissaLoader from '../EissaLoader/EissaLoader';

interface EissaButtonProps {
    label?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    isLoading?: boolean;
    icon?: string,
    bg?: string;
    padding?: number
    fontColor?: string;
    borderColor?: string
}

const EissaButton: React.FC<EissaButtonProps> = (props: EissaButtonProps) => {
    const { label, onClick, type = 'button', variant = 'primary', disabled = false,
        isLoading = false, icon, bg, fontColor, padding, borderColor } = props;

    return (
        <button
            className={`${styles.eissa_button} ${variant === 'primary' ? styles.primary : styles.secondary} ${disabled ? styles.disabled : ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled || isLoading}
            style={{ backgroundColor: bg, padding: padding, color: fontColor, borderColor: borderColor }}
        >
            {
                icon &&
                <img src={icon} alt="Button Icon" />
            }
            {isLoading ? <EissaLoader varient={variant} />
                : label}
        </button>
    );
};

export default EissaButton;
