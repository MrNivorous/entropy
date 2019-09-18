import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './Home';

class Routes extends React.Component {
	render () {
	return (	<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/home" component={Home} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
)
	}
}

export default Routes;
