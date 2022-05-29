import Heading from "../components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from '../styles/404.module.scss'

//Customs error pages
const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router])

    return (
        <div className={styles.wrapper}>
            <div>
                <Heading text={'Error:404'} />
                <Heading tag='h3' text='Path not found' />
            </div>
        </div>
    );
}

export default Error;
