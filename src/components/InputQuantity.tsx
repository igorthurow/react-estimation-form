import React from 'react'

const InputQuantity: React.FC<Props> = props => {
	return (
		<div className='InputQuantity'>
			<div className='decrease' onClick={props.onDecrease}>
				-
			</div>
			<div>{props.value}</div>
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
