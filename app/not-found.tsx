"use client"
import {useRouter} from 'next/navigation'
const NotFound = () => {
    const router = useRouter()
    const pushToHome = ()=>{
        router?.push("/")
    }
  return ( <div className="container text-center">
<h1 className='text-red-500'>Page Not Found</h1>
<button onClick={pushToHome} className='bg-blue-400 text-white rounded-lg p-2 m-2'>Go To Home</button>
  </div>
  ) 
}
export default NotFound