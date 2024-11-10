import React from 'react';
import styled from 'styled-components';
import Soon from '../soon/Soon';

const Card = () => {
  return (
    <StyledWrapper>
        <div className='flex justify-center items-center bg-[#e8e8e8] w-screen h-screen'>
        <div className="card flex flex-col shadow-black items-center  " > 
            <Soon/>
        
        <div className="header"> 
         
          <div className="content">
            
            <p className="message text-lg font-medium ">This application is currently optimized for laptops and desktops. Mobile support is under development and will be available soon.</p> 
          </div> 
          
        </div> 
      </div>
        </div>
     
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    
    position: relative;
    text-align: left;
    border-radius: 0.5rem;
    max-width: 290px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background-color: #fff;
  }




  .header {
    padding: 1.25rem 1rem 1rem 1rem;
  }




  .content {
    margin-top: 0.75rem;
    text-align: center;
  }

 

  .message {
    margin-top: 0.5rem;
    color: #595b5f;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }




 `;

export default Card;
