import useCounter from "../../hooks/counter"

function Counter() {
  const {count,setcount}=useCounter(); 
  return (
    <div className=" md:w-32 w-full h-16 border-[1px] flex  items-center justify-between   py-5 px-4 rounded-[10px] ">
<button onClick={()=>setcount(count - 1)} className=" text-base  h-6 cursor-pointer font-normal">
    -
</button>

{count}

<button onClick={() => setcount(count + 1)} className=" text-base h-6    cursor-pointer font-normal">
              +
</button>


    </div>
  )
}

export default Counter