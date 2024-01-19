import { Outlet } from 'react-router-dom'
import styles from './PaginaPadrao.module.scss'
import stylesTema from '../../styles/Tema.module.scss'

const PaginaPadrao = ({children}:{children? : React.ReactNode}) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
					Restô 613
				</div>
			</header>
			<div className={stylesTema.container}>
				<Outlet />
				{children}
			</div>
		</>
	)
}

export default PaginaPadrao