import React from 'react'
import CardSlider from './CardSlider'

export const AboutUs = () => {
  return (
    <>

        <section className='about_us_section' id='AboutUs'>

            <div className='container'>
                <div className='row'>
                    <div className='clo-12'>
                        <div className='about_us_Main'>
                            <p>What Our Customers <span>Say About Us</span></p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'> 
                    <CardSlider/>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
  
}

export default AboutUs