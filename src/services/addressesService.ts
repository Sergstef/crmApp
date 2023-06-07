export const getAddresses = (query: string) => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "61fd7ed77c0d9f46aac54fed23a003269a900f92";

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }

    return fetch(url, options)
        .then(response => response.text())
        .then(result => result)
        .catch(error => console.log("error", error));
}