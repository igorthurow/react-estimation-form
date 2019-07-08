import React from 'react'
import InputQuantity from '../components/InputQuantity'
import EstimationForm from '../containers/EstimationForm'
import './Almofada.scss'
import { Submenu } from '../components/Submenu'

const Almofada: React.FC<Props> = props => {
	const onChangeSizes = (index: 0 | 1 | 2, newValue: number) => {
		let sizes = props.sizes

		sizes[index] = newValue

		return props.onChange(sizes)
	}

	return (
		<div className={Almofada.displayName}>
			<Submenu subtitle='Selecione o tamanho de almofada'>
				<InputQuantity
					title={<span>Pequena</span>}
					onChange={newValue => onChangeSizes(0, newValue)}
					value={props.sizes[0]}
				/>

				<div>
					<InputQuantity
						title={<span>Média</span>}
						onChange={newValue => onChangeSizes(1, newValue)}
						value={props.sizes[1]}
					/>
				</div>
				<div>
					<InputQuantity
						title={<span>Grande</span>}
						onChange={newValue => onChangeSizes(2, newValue)}
						value={props.sizes[2]}
					/>
				</div>
			</Submenu>
		</div>
	)
}

Almofada.displayName = 'Almofada'

export interface Props {
	sizes: EstimationForm['state']['productController']['almofada']['sizes']
	onChange: (sizes: [number, number, number]) => void
}

export default Almofada
