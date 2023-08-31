import { redirect } from "react-router-dom";

export const getAuthToken = () => {
	return localStorage.getItem("token");
};

export const tokenLoader = () => {
	return getAuthToken();
};

export const checkIsAuth = () => {
	if (!getAuthToken()) {
		return redirect("/auth");
	}

	return null;
};
