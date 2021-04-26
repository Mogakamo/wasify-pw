import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'

export default function Secret() {
    const [session, loading] = useSession();
    const [content, ]
}