import { useRouter } from "next/navigation"

export const redirect=(route)=>{
    const router = useRouter();
    router.replace(`/pages/${route}`)
}