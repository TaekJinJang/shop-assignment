import {useSearchParams} from 'react-router-dom';

export default function useQuerystring() {
    const [searchParams, setSearchParams] = useSearchParams();

    const getQuery = (key: string) => {
        return searchParams.get(key);
    };

    const addQuery = (key: string, value: string) => {
        searchParams.set(key, value);
        setSearchParams(searchParams);
    };

    return {getQuery, addQuery};
}
