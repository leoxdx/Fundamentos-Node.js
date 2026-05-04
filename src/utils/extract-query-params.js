export function extractQueryParams(query) {

    return query
        .split("&")
        .reduce((queryParams, param) => {
            const [key, value] = param.split("=");

            queryParams[decodeURIComponent(key)] = decodeURIComponent(value);

            return queryParams;
        }, {})

}