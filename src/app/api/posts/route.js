import { NextResponse } from "next/server"

export const GET=async(request)=>{

    return new NextResponse(await request.json(),{status:200})
}