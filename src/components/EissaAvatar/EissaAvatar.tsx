import styles from "./EissaAvatar.module.css"

export type EissaAVatarProps = {
    img?: string;
    height?: number;
    fontSize?: number;
    bg?: string;
    fontColor?: string;
    name?: string
    CTA?: () => void
}

const EissaAvatar = (props: EissaAVatarProps) => {
    const { img, bg, fontColor, fontSize, height, name, CTA } = props;

    return <div className={styles.main_container} style={{ backgroundColor: bg, color: fontColor, fontSize: fontSize, height: height }} onClick={CTA}>
        {
            img ?
                <img src={img} alt="Avatar" className={styles.avatar_img} /> :
                name?.charAt(0).toUpperCase()
        }
    </div>
}

export default EissaAvatar;