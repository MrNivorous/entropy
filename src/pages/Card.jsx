import React from 'react'
import { IonHeader, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonToggle } from '@ionic/react';
import axios from 'axios'

class Card extends React.Component {

state = {
			data: []
}

	componentWillMount() {

		axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true')
				.then(res => {
						const data = res.data;
						this.setState({data: data})
				}).catch(err => {
					console.log("Error")
				})
	}

	render () {
		return(
			<>
			{this.state.data.map((n, i) => {
			return (
				<IonCard color="primary" classname="card" key={i}>
					<IonGrid>
						<IonRow align-items-center>
							<IonCol>
							<IonCardHeader><img src={n.image}/></IonCardHeader>
							</IonCol>
							<IonCol align-self-center>
							<IonCardTitle>{n.name}</IonCardTitle></IonCol>
							<IonCol>
							<IonCardSubtitle align-self-center>${n.current_price}</IonCardSubtitle>
							</IonCol>
							<IonCol>
							Follow:
							<IonToggle color="dark" />
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCard>
			)
		})}
		</>
	)

}
}

export default Card;
