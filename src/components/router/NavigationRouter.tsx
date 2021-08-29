import { Route } from 'react-router-dom';

type INavigationRouter<K = { [key: string]: any }> = K & {
	component: any;
	exact: boolean;
	path: string;
};

export const NavigationRouter = ({
	component: Component,
	...propList
}: INavigationRouter) => {
	return (
		<Route
			exact={propList.exact}
			render={() => {
				window.scrollTo(0, 0);
				return <Component {...propList} />;
			}}
		/>
	);
};
