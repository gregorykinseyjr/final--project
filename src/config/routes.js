import { lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

export const routes = {
	home: {
		name: "Home",
		path: "/",
		component: lazy(() => import('../pages/Home/HomePage')),
		type: PrivateRoute
	},
	login: {
		name: "login",
		path: "/login",
		component: lazy(() => import('../pages/Login/Login')),
		type: ProtectedRoute
	},
	register: {
		name: "register",
		path: "/register",
		component: lazy(() => import('../pages/Register/Register')),
		type: ProtectedRoute
	},
	gregpage: {
		name: "gregpage",
		path: "/greg",
		component: lazy(() => import('../pages/GregPage/GregPage')),
		type: PrivateRoute
	},
	esraapage: {
		name: "esraapage",
		path: "/esraa",
		component: lazy(() => import('../pages/EsraaPage/EsraaPage')),
		type: PrivateRoute
	},
	amarepage: {
		name: "amarepage",
		path: "/amare",
		component: lazy(() => import('../pages/AmarePage/AmarePage')),
		type: PrivateRoute
	},
	alijahpage: {
		name: "alijahpage",
		path: "/alijah",
		component: lazy(() => import('../pages/AlijahPage/AlijahPage')),
		type: PrivateRoute
	},
	ayleahpage: {
		name: "ayleahpage",
		path: "/ayleah",
		component: lazy(() => import('../pages/AyleahPage/AyleahPage')),
		type: PrivateRoute
	},
	amirapage: {
		name: "amirapage",
		path: "/amira",
		component: lazy(() => import('../pages/AmiraPage/AmiraPage')),
		type: PrivateRoute
	},
};

export const renderRoutes = Object.entries(routes);