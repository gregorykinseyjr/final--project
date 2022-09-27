import React, { lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from "./config/routes";


const Layout = lazy(() => import("./components/Layout/Layout"));

function App() {
	return (
		<BrowserRouter>
			<Switch>
				{renderRoutes.map(([key, route]) => (
					<route.type key={key} exact path={route.path}
						render={() => (
							<Layout>
								<route.component {...route.props} />
							</Layout>
						)}
					/>
				))}
			</Switch>
		</BrowserRouter>
	);
}

export default App;