import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'

export default function Secret() {
    const [session, loading] = useSession();
    const [content, setContent] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const res = ae
        }
      return () => {
        effect
      };
    }, [input])
}