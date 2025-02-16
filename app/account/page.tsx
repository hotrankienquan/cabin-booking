
import { Metadata } from "next"
import { auth } from "../_lib/auth"

export const metadata: Metadata = {
    title:"cabin page"
}

export default async function Page(){
    const session = await auth()
    return (<div>
        <h2 className="text-2xl text-accent-400 font-semibold">Welcome, {session?.user?.name}</h2>
    </div>)
}