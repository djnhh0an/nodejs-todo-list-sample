import authRoute from "./auth.route";
import todoRoute from "./todo.route";

const routes = [
    ...authRoute,
    ...todoRoute
];

export default routes;