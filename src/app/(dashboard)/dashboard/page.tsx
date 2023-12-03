'use client'

import { useUser } from '@clerk/nextjs'
import React from 'react'

function DashboardPage(): React.FC {
    const { user } = useUser()
    return (
        <section>
            <div>DashboardPage</div>

            <p>{user?.fullName}</p>
        </section>
    )
}

export default DashboardPage