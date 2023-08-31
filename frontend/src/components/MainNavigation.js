import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";
import { getAuthToken } from "../util/auth";

function MainNavigation() {
	const isLoggedIn = useRouteLoaderData("rootRoute");

	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/events"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							Events
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/newsletter"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							Newsletter
						</NavLink>
					</li>
					{!isLoggedIn && (
						<li>
							<NavLink
								to="/auth?mode=login"
								className={({ isActive }) =>
									isActive ? classes.active : undefined
								}
							>
								Login
							</NavLink>
						</li>
					)}
					{isLoggedIn && (
						<Form action="/logout" method="post">
							<button>Logout</button>
						</Form>
					)}
				</ul>
			</nav>
			<NewsletterSignup />
		</header>
	);
}

export default MainNavigation;
