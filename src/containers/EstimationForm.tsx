import React from 'react'
import './EstimationForm.scss'

import almofada from '../assets/almofada.svg'
import colchao from '../assets/colchao.svg'
import cadeira from '../assets/cadeira.svg'
import sofa from '../assets/sofa.svg'
import carro from '../assets/carro.svg'
import poltrona from '../assets/poltrona.svg'
import puff from '../assets/puff.svg'
import travesseiro from '../assets/travesseiro.svg'
import tapete from '../assets/tapete.svg'
import chaise from '../assets/chaise.svg'

class EstimationForm extends React.Component<{}, State> {
	public readonly state: State = {
		activeProduct: 'cadeira',
		step: 'impermeabilization'
	}

	static displayName = 'EstimationForm'

	public translation = {
		impermeabilization: 'Impermeabilização',
		higyenization: 'Higienização'
	}

	public renderProducts = () => {
		const products: { icon: string; name: State['activeProduct'] }[] = [
			{ name: 'sofá', icon: sofa },
			{ name: 'colchão', icon: colchao },
			{ name: 'cadeira', icon: cadeira },
			{ name: 'carro', icon: carro },
			{ name: 'poltrona', icon: poltrona },
			{ name: 'puff', icon: puff },
			{ name: 'travesseiro', icon: travesseiro },
			{ name: 'cheise long', icon: chaise },
			{ name: 'recamier', icon: 'recamier' },
			{ name: 'divã', icon: 'divã' },
			{ name: 'tapete', icon: tapete }
		]

		if (this.state.step === 'impermeabilization')
			products.push(
				{ icon: '', name: 'cortina' },
				{ icon: almofada, name: 'almofada' }
			)

		products.sort()

		const onProductSelect = (product: State['activeProduct']) => {
			this.setState({ activeProduct: product })
		}

		return (
			<div className='products'>
				<div className='title-sm'>
					Selecione o item para aplicação do serviço:
				</div>
				<div className='products-wrapper'>
					{products.map((product, index) => (
						<div
							key={index}
							onClick={() => onProductSelect(product.name)}
							className={`product ${
								this.state.activeProduct === product.name ? 'active' : ''
							} btn`}
						>
							<img src={product.icon} />
						</div>
					))}
				</div>
			</div>
		)
	}

	public changeStepHandler = (step: State['step']) => {
		this.setState({
			activeProduct: 'cadeira',
			step
		})
	}

	public renderProductOption = () => {
		if (!this.state.activeProduct) return null

		const options = {
			material: () => <div>O material é tecido</div>,
			quantity: (title: string) => (
				<div>
					<div>{title}</div>
					<input type='range' />
				</div>
			)
		}

		const content = () => {
			switch (this.state.activeProduct) {
				case 'colchão':
					return <div>{options.quantity('Quantidade de Colchões')}</div>
				case 'sofá':
					return (
						<div>
							{options.quantity('Número de lugares do sofá')}
							{options.quantity('Quantidade de sofás')}
						</div>
					)
			}
		}

		return (
			<div className='selected-product-option'>
				{this.state.activeProduct}
				{content()}
			</div>
		)
	}

	public renderContactForm = () => (
		<form action={''} className='contact-form'>
			<div className='contact-form-input-wrapper'>
				<div className='contact-form-field'>
					<span>Nome completo</span>
					<input required placeholder='*Obrigatório' />
				</div>

				<div className='contact-form-field'>
					<span>Telefone</span>
					<input required placeholder='*Obrigatório' />
				</div>
			</div>

			<button className='btn' type='submit'>
				Solicitar orçamento
			</button>
		</form>
	)

	public renderServiceType = () => (
		<div className='services-type'>
			<div className='service-head title-sm'>Selecione o serviço desejado</div>
			<div className='service-wrapper'>
				<div
					className={`service${
						this.state.step === 'impermeabilization' ? ' active' : ''
					} btn`}
					onClick={() => this.changeStepHandler('impermeabilization')}
				>
					{this.translation['impermeabilization']}
				</div>

				<div
					className={`service${
						this.state.step === 'hygienization' ? ' active' : ''
					} btn`}
					onClick={() => this.changeStepHandler('hygienization')}
				>
					{this.translation['higyenization']}
				</div>
			</div>
		</div>
	)

	public renderHead = () => (
		<div className='head'>
			<h1>Solicitar Orçamento</h1>
			<span>Nossos serviços são aplicados somente em itens de tecido</span>
		</div>
	)

	public render() {
		return (
			<div className={EstimationForm.displayName}>
				<div className='wrapper'>
					{this.renderHead()}
					{this.renderServiceType()}

					{this.renderProducts()}
					{this.renderProductOption()}

					{this.renderContactForm()}
				</div>
			</div>
		)
	}
}

interface State {
	activeProduct:
		| 'sofá'
		| 'colchão'
		| 'cadeira'
		| 'carro'
		| 'poltrona'
		| 'puff'
		| 'travesseiro'
		| 'cheise long'
		| 'recamier'
		| 'divã'
		| 'cortina'
		| 'tapete'
		| 'almofada'

	step: 'hygienization' | 'impermeabilization'
}

export default EstimationForm
