import Link from "next/link";
import styles from "./style.module.css"
import Image from "next/image";
const BigPicture = () => {
    return (
        <div className={styles.container}>
            <div>
                İphone 14 Pro
            </div>
            <div>
                <Link href="/productDetail/1">Buy Now</Link>
            </div>
            <Image className={styles.img} src="/bigImage.png" width={400} height={400} alt="img" />
        </div >
    )
}

export default BigPicture;