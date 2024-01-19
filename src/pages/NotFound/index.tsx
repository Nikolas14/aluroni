import styles from './NotFound.module.scss'
import { ReactComponent as NotFoundImg } from 'assets/not_found.svg'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import stylesTema from 'styles/Tema.module.scss'

const NotFound = () => {
	const navigate = useNavigate()
	return (
		<div className={classNames({
			[styles.container]:true,
			[stylesTema.container]:true,
		})}>
			<div className={styles.voltar}>
				<button onClick={()=>{navigate(-1)}}>{'< Voltar'}</button>
			</div>
			<NotFoundImg/>
		</div>
	)
}

export default NotFound