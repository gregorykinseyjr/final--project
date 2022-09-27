import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./routes";

const ProtectedRoute = (props) => {
	const { isLoggedIn } = useSelector((state) => state.user);

	return (
		<div>
			{isLoggedIn ? (
				<Redirect
					to={{
						pathname: routes.home.path,
					}}
				/>
			) : (
				<Route {...props} />
			)}
		</div>
	);
};

export default ProtectedRoute;