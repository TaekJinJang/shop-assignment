/**
 * useQuerystring
 *
 * @returns {{getQuery: (key: string) => string | null, addQuery: (key: string, value: string) => void}} 객체 반환:
 * - `getQuery`: 주어진 키에 해당하는 쿼리스트링 값을 가져옵니다. 값이 없으면 `null`.
 * - `addQuery`: 주어진 키와 값을 쿼리스트링에 추가합니다.
 */

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
