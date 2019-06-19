import React from 'react'
import InputQuantity from '../components/InputQuantity'

const Sofa: React.FC<Props> = props => {
	return (
		<div className='Sofa'>
			<div>Você possui um conjunto?</div>
			<div onClick={() => props.onChangeSetHandler(true)}>Sim</div>
			<div onClick={() => props.onChangeSetHandler(false)}>Não</div>
			{props.isSet ? (
				<div>
					<div>button</div>
				</div>
			) : (
				<div>
					<div>Número de lugares {<InputQuantity />}</div>
					<div>Quantidade de sofás {<InputQuantity />}</div>
					<div />
				</div>
			)}
		</div>
	)
}

interface Props {
	onChangeSetHandler: (isSet: boolean) => void
	isSet: boolean
}

export default Sofa
