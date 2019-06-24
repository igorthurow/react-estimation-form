import React, { useState, useMemo } from 'react'
import InputQuantity from '../components/InputQuantity'
import './Sofa.scss'

const Sofa: React.FC<Props> = props => {
	//TODO: Preciso propagar os lugares em cada setSofaQuantityState

	const sofaQuantity: { [x: string]: number } = {}

	const [sofaQuantityState, setSofaQuantityState] = useState(sofaQuantity)

	for (let i = 1; i <= props.sofaQuantity; i++) {
		sofaQuantity[i] = sofaQuantityState[i] || 1
	}

	useMemo(() => setSofaQuantityState(sofaQuantity), [props.sofaQuantity])

	const renderPlaceQuantity = () => {
		return Object.keys(sofaQuantity).map(i => {
			return (
				<div>
					Número de lugares
					{
						<InputQuantity
							value={sofaQuantityState[i]}
							onDecrease={() =>
								sofaQuantityState[i] - 1 &&
								setSofaQuantityState({
									...sofaQuantityState,
									[i]: sofaQuantityState[i] - 1
								})
							}
							onIncrease={() =>
								setSofaQuantityState({
									...sofaQuantityState,
									[i]: sofaQuantityState[i] + 1
								})
							}
						/>
					}
				</div>
			)
		})
	}

	return (
		<div className='Sofa'>
			<div>Você possui um conjunto?</div>
			<div onClick={() => props.onChangeSet(true)}>Sim</div>
			<div onClick={() => props.onChangeSet(false)}>Não</div>
			{props.isSet ? (
				<div>
					<div>button</div>
				</div>
			) : (
				<div className='quantity-controller'>
					<div>
						Quantidade de sofás
						{
							<InputQuantity
								value={props.sofaQuantity}
								onDecrease={() =>
									props.sofaQuantity - 1 &&
									props.onChangeSofaQuantity(props.sofaQuantity - 1)
								}
								onIncrease={() =>
									props.onChangeSofaQuantity(props.sofaQuantity + 1)
								}
							/>
						}
					</div>
					<div>{renderPlaceQuantity()}</div>
				</div>
			)}
		</div>
	)
}

interface Props {
	onChangePlacesQuantity: (value: number) => void
	onChangeSofaQuantity: (value: number) => void
	sofaQuantity: number
	onChangeSet: (isSet: boolean) => void
	isSet: boolean
}

export default Sofa
