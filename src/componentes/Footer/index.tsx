import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo/>
		</footer>
	)
}

export default Footer