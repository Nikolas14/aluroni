import Menu from 'componentes/Menu'
import Cardapio from 'pages/Cardapio'
import Inicio from 'pages/Inicio'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PaginaPadrao from 'componentes/PaginaPadrao'
import Sobre from 'pages/Sobre'
import Footer from 'componentes/Footer'
import NotFound from 'pages/NotFound'
import Prato from 'pages/Prato'

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Routes>
					<Route path="/" element={<PaginaPadrao />} >
						<Route index element={<Inicio/>}/>
						<Route path='cardapio' element={<Cardapio/>}/>
						<Route path='sobre' element={<Sobre />} /> 
					</Route>
					<Route path='*' element={<NotFound />} /> 
					<Route path='prato/:id' element={<Prato />} /> 
				</Routes>
				<Footer/>
			</Router>
		</main>
	)
}