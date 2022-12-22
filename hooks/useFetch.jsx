import { useState, useEffect } from "react";

const useFetch = (url, header) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(async () => {
        const data = await fetch(url, header)
            .then(response => {
                return response.json();
            }).then(data => {
                setData(data)
            }).catch((error) => {
                setError(error.message)
            });
    }, [url]);

    return { data, error }
}

export default useFetch;