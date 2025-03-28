import { useEffect, useState, useCallback } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
    refetch: () => void;
}

export const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<ErrorType>(null)
    
    const fetchData = useCallback (async () => {
        const controller = new AbortController();
        setLoading(true);
        try{
            const response = await fetch(url, {signal: controller.signal})
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`)
            } 
            const jsonData: T = await response.json();
            setData(jsonData)
            setError(null)
        } catch (err){
            setError(err as Error)
        } finally{
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return {data, loading, error, refetch: fetchData}
}