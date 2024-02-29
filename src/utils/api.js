import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_REACT_APP_API_KEY;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzcxMzUwYmI3Y2MyMzc3YWEwNTYxMmM4YjE1MWZjZiIsInN1YiI6IjY1ZDcxNWI3YzVjMWVmMDE2NDhiNDk2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZtV0QVk3Zu6Dw_iuM7kOdpTqGnp0mNwmjVvFYY2oXy4";
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};