import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";

export const TexiTransfer = () => {
  return (
    <>

        <section className='texitransfersection' id='TexiTransfer'>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='TexiTransferMain'>
                            <div className='texiTransferHeading'>
                                <p><span>Welcome to</span> Luton Airport Taxi Transfer!</p>
                            </div>
                            <div className='texiTransfertitle'>
                                <p>Going to or from Luton airport has never been easier with lutonairporttaxis.co.uk</p>
                            </div>
                            <div className='texiTransferdescription'>
                                <p>Going to or from Luton airport has never been easier with LUTONAIRPORT.TAXI. We provide affordable, convenient, and safe airport transfers around the clock with just a click or call. Our fleet is up to date with the latest vehicles and technology with vetted, reliable hand picked drivers allowing a comfortable, hassle free journey.</p>
                            </div>
                            <button className='btn btn-primary'>About Us
                            <RiArrowRightUpLine/>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </>
  )
}

export default TexiTransfer