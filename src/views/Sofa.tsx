import React from 'react'
import InputQuantity from '../components/InputQuantity'
import './Sofa.scss'
import { Button } from '../components/Button'
import { State as EstimationFormInterface } from '../containers/EstimationForm'

const Sofa: React.FC<Props> = props => {
	const renderPlaceQuantity = () => {
		return props.placesQuantity.map((places, index) => {
			return (
				<div>
					Número de lugares
					{
						<InputQuantity
							value={places}
							onChange={newValue => {
								const placesQuantity = props.placesQuantity

								placesQuantity[index] = newValue

								props.onChangePlacesQuantity(placesQuantity)
							}}
						/>
					}
				</div>
			)
		})
	}

	return (
		<div className='Sofa'>
			<div className='submenu'>
				Você possui um conjunto?
				<div className='controllers'>
					<Button
						isActive={props.isSet}
						onClick={() => props.onChangeSet(true)}
					>
						Sim
					</Button>

					<Button
						isActive={!props.isSet}
						onClick={() => props.onChangeSet(false)}
					>
						Não
					</Button>
				</div>
			</div>

			{props.isSet ? (
				<div className='type-controller'>
					<div>
						<Button
							onClick={() =>
								props.onChangeSelectedSet(props.selectedSet.type, '2/3')
							}
							isActive={props.selectedSet.places === '2/3'}
						>
							2 e 3 lugares
						</Button>
						<Button
							onClick={() =>
								props.onChangeSelectedSet(props.selectedSet.type, '2/4')
							}
							isActive={props.selectedSet.places === '2/4'}
						>
							2 e 4 lugares
						</Button>
					</div>

					<div>
						<Button
							onClick={() =>
								props.onChangeSelectedSet('comum', props.selectedSet.places)
							}
							isActive={props.selectedSet.type === 'comum'}
						>
							Comum
						</Button>
						<Button
							onClick={() =>
								props.onChangeSelectedSet('retrátil', props.selectedSet.places)
							}
							isActive={props.selectedSet.type === 'retrátil'}
						>
							Retrátil
						</Button>
					</div>
				</div>
			) : (
				<div className='quantity-controller'>
					<div>
						Quantidade de sofás
						{
							<InputQuantity
								value={props.sofaQuantity}
								onChange={newValue => props.onChangeSofaQuantity(newValue)}
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
	onChangePlacesQuantity: (value: Props['placesQuantity']) => void
	onChangeSofaQuantity: (value: Props['sofaQuantity']) => void
	isSet: boolean
	onChangeSet: (isSet: boolean) => void
	sofaQuantity: EstimationFormInterface['productController']['sofa']['sofaQuantity']
	placesQuantity: EstimationFormInterface['productController']['sofa']['placeQuantity']
	selectedSet: EstimationFormInterface['productController']['sofa']['selectedSet']
	onChangeSelectedSet: (
		type: EstimationFormInterface['productController']['sofa']['selectedSet']['type'],
		places: EstimationFormInterface['productController']['sofa']['selectedSet']['places']
	) => void
}

export default Sofa
