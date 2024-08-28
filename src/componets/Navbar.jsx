import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {

    const navItems = [
        { label: "Home", href: "#" },
        { label: "Company", href: "#" },
        { label: "Marketplace", href: "#" },
        { label: "Features", href: "#" },
        { label: "Team", href: "#"},
        { label: "Contact", href: "#"}
        
        
      ];

  return (
    <div className='flex md:flex-row  items-center justify-between p-3 md:px-[5rem]  md:sticky '>
        <div>
        <img src={Logo}  alt="Logo" />
        </div>
      

       <ul className='hidden gap-8 md:flex'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                         <a className='font-medium hover:text-accent ' href="">{item.label}</a>  
                        </li>
                    ))} 
       </ul>


          <div className='flex items-center gap-4'>
            <div>
               <a href="#">Log In</a>
            </div>
                <div>
                <button className='bg-accent text-white h-[2.6015rem] w-[7.0325rem] rounded-[0.615rem] hover:'>Download</button>
                </div>
               
          </div>

    </div>
  )
}

export default Navbar