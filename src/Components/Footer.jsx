import React from 'react'
import { Navigate } from 'react-router'

export default function Footer() {
    return (
        <div className='absolute'>
            <div className='font-[400] text-[13px] text-[#ffffff] bg-[#485769]'>Back to top</div>
 
            <div className='grid'></div>

            <hr />

            <div>
                <img src="" alt="" />
                <span>
                    <select name="" id=""></select>
                    <button></button>
                </span>
            </div>

            <div className='grid'></div>

            <div className=''>
                <span>
                    <a href='#'>Conditions of Use & Sale</a>
                    <a href='#'>Privacy Notice</a>
                    <a href='#'>Interest-Based Ads</a>
                </span>
                <span>© 1996-2025, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}
