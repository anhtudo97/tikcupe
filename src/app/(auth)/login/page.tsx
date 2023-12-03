import { SignIn } from '@clerk/nextjs'
import React from 'react'

function LoginPage() {
    return (
        <SignIn redirectUrl={'/dashboard'} />
    )
}

export default LoginPage