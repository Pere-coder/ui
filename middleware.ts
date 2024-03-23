import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'


export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({req, res})

    const {data: {user}} = await supabase.auth.getUser()

    if (!user) {
        return NextResponse.redirect(new URL('http://localhost:3000/SupabaseLogin'))
    }

    return res
}

export const config = {
    matcher: ['/',], 
}