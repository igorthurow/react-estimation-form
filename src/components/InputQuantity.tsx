import React from 'react'
import './InputQuantity.scss'

const InputQuantity: React.FC<Props> = props => {
	return (
		<div className='InputQuantity'>
			<div className='decrease' onClick={props.onDecrease}>
				-
			</div>
			<div className='value'>{props.value || 0}</div>
			<div onClick={props.onIncrease} className='increase'>
				+
			</div>
		</div>
	)
}

interface Props {
	value?: number
	onDecrease?: () => void
	onIncrease?: () => void
}

export default InputQuantity
