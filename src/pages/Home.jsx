import React from 'react'
import { IonHeader, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonToggle } from '@ionic/react';
import axios from 'axios'
import Card from './Card'



class Home extends React.Component {

state = {
			data: [],
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
		return (

				<IonContent>
				<IonHeader style={{textAlign: "center", color: "black", fontSize:40, fontWeight:900, padding: 10}}>Entropy</IonHeader>
				<Card />
				</IonContent>
			)


	}
}

export default Home;
