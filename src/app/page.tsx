import {Button, ConfigProvider} from 'antd';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <ConfigProvider theme={{
                components: {
                    Button: {
                        colorText: 'red'
                    }
                }
            }}>
                <Button>Text</Button>
            </ConfigProvider>
        </main>
    )
}
