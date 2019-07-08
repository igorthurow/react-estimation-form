import React from 'react'
import './Submenu.scss'

export const Submenu: React.FC<Props> = props => {
	return (
		<div className={`Submenu ${props.className}`}>
			<div className='subtitle'>{props.subtitle}</div>
			<div>{props.children}</div>
		</div>
	)
}

interface Props {
	subtitle: string
	className?: string
}
