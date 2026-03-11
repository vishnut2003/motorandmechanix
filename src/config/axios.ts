import axios from "axios";

export function getWordpressAxios() {
    const WORDPRESS_DOMAIN = process.env.WORDPRESS_DOMAIN;

    if (!WORDPRESS_DOMAIN) {
        throw new Error("Please provide WORDPRESS_DOMAIN in .env");
    }

    const wordpressApi = axios.create({
        baseURL: `https://${WORDPRESS_DOMAIN}`,
    })

    return wordpressApi;

}