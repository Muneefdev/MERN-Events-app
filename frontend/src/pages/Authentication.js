import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
	return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
	const mode = new URL(request.url).searchParams.get("mode") || "login";

	const data = await request.formData();
	const authData = {
		email: data.get("email"),
		password: data.get("password"),
	};

	let url = "http://localhost:8080/login";
	if (mode === "signup") {
		url = "http://localhost:8080/signup";
	}

	const res = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(authData),
	});

	if (res.status === 422 || res.status === 401) {
		return res;
	}
	if (!res.ok) {
		throw json({ message: "Failed to proceed." }, { status: 500 });
	}

	const resData = await res.json();
	const token = resData.token;
	localStorage.setItem("token", token);

	return redirect("/");
};
