import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

export const  Header = () => {
    return (
        <>
            <div className='header_main_div'>
                <div className='h1_div'>
                    <img src="https://www.innsight.com/external/widgets/assets/img/logo_booking.svg" alt="" />
                    <p>$199.00</p>
                </div>

                <div className='h2_div'>
                    
                    <div className='h2_div_part1'>
                       <p>OUR RATE</p>
                    </div>
                
                   <div className='h2_div_part2'> 
                        <p>$189.00
                           <sup>(Save $10)</sup>
                        </p> 
                    </div>
                </div>

                <div className='h3_div'>
                    <img src="https://www.innsight.com/external/widgets/assets/img/lowest.png" alt="" />
                </div>
                

                <div className='h4_div'>
                    <div> <img src="" alt="" /></div>
                    <div> 
                        <button className='header_btn'> COMPARE RATES </button>
                    </div>
                </div>

                <div className='cross_icon'>
                    <ClearIcon />
                </div>
                    
                

            </div>
        </>
    )
};
