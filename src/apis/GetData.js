import { useState, useEffect } from 'react'
import Axios from "axios"

const GetData = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        // window.setInterval(() => {
            
            Axios.get(url)
            .then(response => {
            if (response.status !== 200) {
                throw Error("Could not fetch the data for that resource")
            }
            return response.data
            })
            .then(data => {
                setData(data.data)
                setIsLoading(false)
                setIsError(null)
            })
            .catch(err => {
                setIsLoading(false)
                setIsError(err.message)
            })
        // }, 3000)
    }, [url])
    
    return {data, isLoading, isError};
}

export default GetData;