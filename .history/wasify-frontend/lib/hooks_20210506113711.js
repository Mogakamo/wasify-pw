//state mnagement
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

export function useU(params) {
    
}