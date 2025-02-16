import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

// export function middleware(request){
//     console.log(request);
    

//     return NextResponse.redirect(new URL("/about", request.url))
// }
export const middleware = auth
//khi vao link account, middlware se dc kich hoat
export const config = {
    matcher: ["/account"]
}