import React, { PropsWithChildren } from 'react'

function DashboardLayout({ children }): React.FC<PropsWithChildren> {
    return (
        <main className='flex justify-center items-center h-[100vh]'>
            {children}
        </main>
    )
}

export default DashboardLayout