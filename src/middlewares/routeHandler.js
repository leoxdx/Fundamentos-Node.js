import { routes } from "../routes.js"
import { extractQueryParams } from "../utils/extract-query-params.js";
import { Database } from "../database.js";

const database = new Database()

export function routeHandler(req, res) {
    const [urlPath, queryString] = req.url.split('?');

    const route = routes.find((route) => {
        return route.method === req.method && route.path.test(urlPath);
    });

    if (route) {
        const routeParams = urlPath.match(route.path);
        const { groups: params } = routeParams || {};

        req.params = params || {};
        req.query = queryString ? extractQueryParams(queryString) : {};

        return route.controller({req, res, database});
    }

    res.writeHead(404).end(JSON.stringify({
        error: "Rota não encontrada"
    }));
}