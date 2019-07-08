import React from 'react'
import './InputQuantity.scss'

const InputQuantity: React.FC<Props> = props => {
	return (
		<div className='InputQuantity'>
			{props.title && <span className='option-title'>{props.title}</span>}
			<div className='controllers'>
				<div
					className='decrease'
					onClick={() =>
						props.value - 1 >= 0 ? props.onChange(props.value - 1) : false
					}
				>
					-
				</div>
				<div className='value'>{props.value || 0}</div>
				<div
					onClick={() => props.onChange(props.value + 1)}
					className='increase'
				>
					+
				</div>
			</div>
		</div>
	)
}

interface Props {
	value: number
	onChange: (newValue: number) => void
	title?: JSX.Element
}

export default InputQuantity
