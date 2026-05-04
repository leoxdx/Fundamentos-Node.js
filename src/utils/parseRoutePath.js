export function parseRoutePath(routePath) {
    const routeParametersRegex = /:([a-zA-Z]+)/g;
    const params = routePath.replaceAll(routeParametersRegex, "(?<$1>[a-zA-Z0-9-_]+)");

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`);

    return pathRegex;
}