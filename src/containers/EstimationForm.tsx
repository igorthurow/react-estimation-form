import React from 'react'
import './EstimationForm.scss'
import almofada from '../assets/almofada-01.svg'
import almofadaHover from '../assets/almofada-02.svg'
import colchao from '../assets/colchao-01.svg'
import colchaoHover from '../assets/colchao-02.svg'
import cadeira from '../assets/cadeira-01.svg'
import cadeiraHover from '../assets/cadeira-02.svg'
import sofa from '../assets/sofa-01.svg'
import sofaHover from '../assets/sofa-02.svg'
import carro from '../assets/carro-01.svg'
import carroHover from '../assets/carro-02.svg'
import poltrona from '../assets/poltrona-01.svg'
import poltronaHover from '../assets/poltrona-02.svg'
import puff from '../assets/puff-01.svg'
import puffHover from '../assets/puff-02.svg'
import travesseiro from '../assets/travesseiro-01.svg'
import travesseiroHover from '../assets/travesseiro-02.svg'
import tapete from '../assets/tapete-01.svg'
import tapeteHover from '../assets/tapete-02.svg'
import chaise from '../assets/chaise-01.svg'
import chaiseHover from '../assets/chaise-02.svg'
import recamier from '../assets/recamier-01.svg'
import recamierHover from '../assets/recamier-02.svg'
import diva from '../assets/diva-01.svg'
import divaHover from '../assets/diva-02.svg'
import cortina from '../assets/cortina-01.svg'
import cortinaHover from '../assets/cortina-02.svg'
import capitalize from 'capitalize'
import Sofa from '../views/Sofa'

class EstimationForm extends React.Component<{}, State> {
	public readonly state: State = {
		activeProduct: 'cadeira',
		step: 'impermeabilization',
		productController: {
			sofa: {
				isSet: false,
				placeQuantity: 1,
				sofaQuantity: 1,
				selectedSet: '2/3'
			}
		}
	}

	static displayName = 'EstimationForm'

	public translation = {
		impermeabilization: 'Impermeabilização',
		higyenization: 'Higienização'
	}

	public productIcons: {
		[key in State['activeProduct']]: { hover: string; normal: string }
	} = {
		'chaise longue': { normal: chaise, hover: chaiseHover },
		almofada: { normal: almofada, hover: almofadaHover },
		cadeira: { normal: cadeira, hover: cadeiraHover },
		carro: { normal: carro, hover: carroHover },
		colchão: { normal: colchao, hover: colchaoHover },
		cortina: { normal: cortina, hover: cortinaHover },
		divã: { normal: diva, hover: divaHover },
		poltrona: { normal: poltrona, hover: poltronaHover },
		puff: { normal: puff, hover: puffHover },
		recamier: { normal: recamier, hover: recamierHover },
		sofá: { normal: sofa, hover: sofaHover },
		tapete: { normal: tapete, hover: tapeteHover },
		travesseiro: { normal: travesseiro, hover: travesseiroHover }
	}

	public renderProducts = () => {
		const renderProductIcon = (productName: State['activeProduct']) =>
			this.state.activeProduct === productName
				? this.productIcons[productName].hover
				: this.productIcons[productName].normal

		const products: { name: State['activeProduct']; icon: string }[] = []

		Object.keys(this.productIcons).forEach(productName => {
			if (
				(productName === 'cortina' || productName === 'almofada') &&
				this.state.step === 'hygienization'
			)
				return null

			return products.push({
				name: productName as State['activeProduct'],
				icon: renderProductIcon(productName as State['activeProduct'])
			})
		})

		products.sort((a, b) => (a.name > b.name ? 1 : -1))

		const onProductSelect = (product: State['activeProduct']) => {
			this.setState({ activeProduct: product })
		}

		return (
			<div className='products'>
				<div className='title-sm'>
					Selecione o item para aplicação do serviço:
				</div>
				<div className='products-wrapper'>
					{products.map((product, index) => {
						const productName = product.name.includes(' ')
							? `${capitalize(product.name.split(' ')[0])} ${capitalize(
									product.name.split(' ')[1]
							  )}`
							: capitalize(product.name)

						return (
							<div
								key={index}
								onClick={() => onProductSelect(product.name)}
								className={`product ${
									this.state.activeProduct === product.name ? 'active' : ''
								} btn`}
							>
								<img src={product.icon} />
								<span>{productName}</span>
							</div>
						)
					})}
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

		const content = () => {
			switch (this.state.activeProduct) {
				case 'colchão':
					return <div />
				case 'sofá':
					const onChangeSetHandler = (isSet: boolean) => {
						this.setState({
							productController: {
								sofa: {
									...this.state.productController.sofa,
									isSet
								}
							}
						})
					}

					return (
						<Sofa
							onChangePlacesQuantity={placeQuantity =>
								this.setState({
									productController: {
										...this.state.productController,
										sofa: {
											...this.state.productController.sofa,
											placeQuantity
										}
									}
								})
							}
							onChangeSofaQuantity={sofaQuantity =>
								this.setState({
									productController: {
										...this.state.productController,
										sofa: {
											...this.state.productController.sofa,
											sofaQuantity
										}
									}
								})
							}
							sofaQuantity={this.state.productController.sofa.sofaQuantity}
							isSet={this.state.productController.sofa.isSet}
							onChangeSet={onChangeSetHandler}
						/>
					)
			}
		}

		return (
			<div className='selected-product-content'>
				<div className='title'>{capitalize(this.state.activeProduct)}</div>
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
			<h1 className='title'>Solicitar Orçamento</h1>
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
		| 'chaise longue'
		| 'recamier'
		| 'divã'
		| 'cortina'
		| 'tapete'
		| 'almofada'

	productController: {
		sofa: {
			isSet: boolean
			sofaQuantity: number
			placeQuantity: number
			selectedSet: string
		}
	}

	step: 'hygienization' | 'impermeabilization'
}

export default EstimationForm
