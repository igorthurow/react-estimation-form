import React from 'react'
import './Button.scss'

export const Button: React.FC<Props> = props => {
	return (
		<button
			onClick={props.onClick}
			className={`Button ${props.isActive ? 'active' : ''}`}
		>
			{props.children}
		</button>
	)
}

interface Props {
	onClick?: () => void
	isActive: boolean
}
