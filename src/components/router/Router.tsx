import { History, Location } from 'history';
import { match, Switch, withRouter } from 'react-router';
import E_404_View from 'src/components/e404/E_404.view';
import HomeView from 'src/components/home/Home.view';
import LayoutView from 'src/components/layout/Layout.view';
import { NavigationRouter } from './NavigationRouter';

export type IHistory<T = undefined> = History<T>;
export type ILocation<T = undefined> = Location<T>;
export type IMatch<T = undefined> = match<T>;

export interface IRouter {
	history: IHistory;
	location: ILocation;
	match: IMatch;
}

const Router: React.FC<IRouter> = (props): React.ReactElement => {
	const routes = (
		<Switch>
			<NavigationRouter path='/' component={HomeView} exact />
			<NavigationRouter path='/*' component={E_404_View} exact />
		</Switch>
	);

	return <LayoutView>{routes}</LayoutView>;
};

export default withRouter(Router);
