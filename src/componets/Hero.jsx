import marketing from '../assets/marketing-strategy.png';
const Hero = () => {
  return (
    <div className='md:px-[5rem]'>
        <div className='flex flex-wrap-reverse items-center justify-between py-[5rem]'>

        
        <div className=''>
               <div className=''>
               <h1 className='font-extrabold text-[4.1231rem] '>Building digital products & brands.</h1>
               <p className='text-gray text-[1.1734rem]'>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
               </div>
                
        
            <div>
             <button className='  text-base font-sans bg-accent text-white h-[2.6015rem] w-[7.0325rem] rounded-[0.615rem] hover:'>Start free trial</button>
             <button className=' border-gray border-2 text-base font-sans bg-white text-black h-[2.6015rem] w-[7.0325rem] rounded-[0.615rem] hover:'>Pricing & FAQ </button>
            </div>

        </div>

        <div>
         <img src={marketing}  alt="Logo" />
        </div>

     </div>
    </div>
  )
}

export default Hero