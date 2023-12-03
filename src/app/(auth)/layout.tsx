import React, { PropsWithChildren } from 'react'

function AuthLayout({ children }): React.FC<PropsWithChildren> {
    return (
        <main className='flex justify-center items-center h-[100vh]'>
            {children}
        </main>
    )
}

export default AuthLayout