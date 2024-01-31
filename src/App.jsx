import { useState ,useRef,useEffect} from 'react'


function App() {

  const [length,setLength]= useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const refi=useRef("null")

  // const passwordGenerator= useCallback(()=>{
   
     


  // },[numberAllowed,charAllowed,length,setPassword])
 const copyToClip= ()=>{
  refi.current?.select()
  refi.current?.setSelectionRange(0,5)
  window.navigator.clipboard.writeText(password)
   
 }
 

 useEffect( ()=> {
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed)
   {
    str+="0123456789"
   }
   if(charAllowed)
   {
    str+="!@#$%^&*(){}[]<>:"
   }
    
   for (let i = 1; i <= length; i++) {
    let idx= Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(idx)

   }
   setPassword(pass)
 },[length,numberAllowed,charAllowed])
   

  return (
    <>
     <div className= '  flex object-cover h-screen   bg-[url("https://images.pexels.com/photos/14982412/pexels-photo-14982412/free-photo-of-a-row-of-white-and-yellow-led-strips.jpeg?auto=compress&cs=tinysrgb&w=600")] justify-center  items-center '>
     <div className=' w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3  text-orange-500 bg-[#121212]  flex-none '>
        <h1 className='text-white text-center m-3'>password Generator</h1>
         
          <div className='flex shadow rounded-lg overflow-hidden mb-4  '>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 rounded-es-md'
            placegolder="password"
            ref={refi}
          
          />
          <button  id='copyBT' onClick={copyToClip} className='bg-blue-500 text-white px-5 py- -shrink-0 rounded-tr-xl hover:bg-blue-600'>copy</button>
          </div>
          
      
          <div className='flex md:flex-row flex-col text-sm gap-x-2 '>
            <div className='flex item-center gap-x-1'>
              <input
               type="range" 
               min={6}
               max={100}
               value={length}
               className='cursur-pointer '
               onChange={(e)=>{setLength(e.target.value)}}  
               />
               <label >length:{length}</label>
            </div>
              <div className='flex item-center gap-x-1' >
                <input type="checkbox"
                defaultChecked={numberAllowed} 
                id="numberInput"
                 onChange={()=>{
                  setNumberAllowed((prev) => !prev);
                 }}/>
                 <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className='flex item-center gap-x-1' >
                <input type="checkbox"
                defaultChecked={charAllowed} 
                id="charInput"
                 onChange={()=>{
                  setCharAllowed((prev) =>!prev);
                 }}/>
                 <label htmlFor="charInput">characters </label>
              </div>
          </div>
      </div>
     </div>
    </>
  )
}

export default App
