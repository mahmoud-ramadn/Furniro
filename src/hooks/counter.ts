import { useState } from "react"


function useCounter() {
    const[count,setcount]=useState(1)
  return{
count,setcount

  }
}

export default useCounter;