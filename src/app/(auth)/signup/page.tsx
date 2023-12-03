import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignupPage() {
    return (
        <SignUp redirectUrl={'/dashboard'} />
    )
}

export default SignupPage