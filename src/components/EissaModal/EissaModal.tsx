import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./EissaModal.module.css";

export type EissaModalProps = {
    ModalContent: React.FC;
    isVisible: boolean;
};

const EissaModal = (props: EissaModalProps) => {
    const { ModalContent, isVisible } = props;

    const [isElementPresent, setIsElementPresent] = useState<boolean>(false);

    useEffect(() => {
        if (isVisible) {
            setIsElementPresent(isVisible);
        } else {
            setTimeout(() => {
                setIsElementPresent(isVisible);
            }, 500);
        }
    }, [isVisible]);

    if (!isElementPresent && !isVisible) return null;

    const modalWithOverlay = (
        <div className={`${styles.main_container} ${isVisible ? styles.visible : styles.hide}`}>
            <ModalContent />
        </div>
    );

    return ReactDOM.createPortal(modalWithOverlay, document.body);
};

export default EissaModal;
