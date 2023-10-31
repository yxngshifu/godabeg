import React from 'react';
import { useNavigate } from 'react-router-dom';


function Accountswitch()  {
  const navigate = useNavigate();

  const handleadmin = () => {
    navigate('/Form');
    };

    const handleclick = () => {
    navigate('/Form2');
    };
  
    


  return (
    <>
    <div>
       <button onClick={handleadmin} className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4
                     bg-violet-500 rounded-xl text-white font-bold text-lg'>
                        Administrators</button>
    </div>
    <div>
     <button onClick={handleclick} className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4
                     bg-violet-500 rounded-xl text-white font-bold text-lg'>
                        His excellency</button>
                        </div>
    </>
  );
  };
  

export default Accountswitch;