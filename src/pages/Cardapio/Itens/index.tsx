import styles from './Itens.module.scss'
import cardapio from '../../../data/cardapio.json'
import Item from './Item'
import { useEffect, useState } from 'react'
import { Cardapio } from 'types/Prato'

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string,
}

const Itens = ({ busca, ordenador, filtro }: Props) => {

	const [lista, setLista] = useState(cardapio)

	function testaBusca(title: string) {
		const regex = new RegExp(busca, 'i')
		return regex.test(title)
	}

	function testaFiltro(id: number) {
		if (filtro !== null) return filtro === id
		return true
	}

	function ordenar(lista: Cardapio) {
		switch(ordenador){
		case 'porcao':
			return lista.sort((a,b)=> a.size > b.size ? 1:-1)
		case 'qtd_pessoas':
			return lista.sort((a,b)=> a.serving > b.serving ? 1:-1)
		case 'preco':
			return lista.sort((a,b)=> a.price > b.price ? 1:-1)
		default:
			return lista
		}
	}

	useEffect(() => {
		const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id))
		setLista(ordenar(novaLista))
	}, [busca, filtro, ordenador])

	return (
		<div className={styles.itens}>
			{lista.map((item) => (
				<Item
					key={item.id}
					title={item.title}
					description={item.description}
					category={item.category}
					serving={item.serving}
					price={item.price}
					size={item.size}
					photo={item.photo}
					id={item.id}
				/>
			))}
		</div>
	)
}

export default Itens