import axios from "axios";

const apiKey =
    "0TXwhjYXXvRg_cJof08hl_oJRIwpmPs6qtXs0uLTEKGyFMKfkwllj3-2g1H4bgC65-6_zFJVERWal0gNBMn64PRGpZ6BQMOxw6JKs_lC3lDb2QEbn9Xh-ReeY42-ZHYx";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            `Bearer ${apiKey}`,
    },
});
