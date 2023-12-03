'use client'

import { Button } from '@/shared/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function LoginButton(): React.FC {
    const { push } = useRouter()

    const navigateTologinPage = () => {
        push('/login')
    }

    return (
        <Button onClick={navigateTologinPage}>
            Create your account
        </Button>
    )
}

export default LoginButton