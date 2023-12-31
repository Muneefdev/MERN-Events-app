import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { useEffect } from "react";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
	// const navigation = useNavigation();
	const submit = useSubmit();
	const token = useLoaderData();

	useEffect(() => {
		if (!token) {
			return;
		}

		setTimeout(() => {
			submit(null, { action: "/logout", method: "POST" });
		}, 1 * 60 * 60 * 1000);
	}, [token, submit]);

	return (
		<>
			<MainNavigation />
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
