import React from 'react'
import PropTypes from 'prop-types'
import logo1 from '../assets/sh1.svg'
import logo2 from '../assets/sh2.svg'
import logo3 from '../assets/sh3.svg'
import logo4 from '../assets/sh4.svg'
import Shipping from './Common/Shipping';

const ShippingLable = (props) => {
    return (
        <section className='py-[40px] border-1 bg-[#e7e2dd]'>
            <div className='row mx-[42px] max-lg:gap-y-10 max-xl:m-0'>
                <Shipping logo={logo1} title={'Free shipping'} subtitle={'On order over $1499'} />
                <Shipping logo={logo2} title={'Quick payment'} subtitle={'Online quick payment'} />
                <Shipping logo={logo3} title={'Easy return'} subtitle={'Return within 24 hours'} />
                <Shipping logo={logo4} title={'24/7 Support'} subtitle={'Customer Support'} />
            </div>
        </section>
    )
}

export default ShippingLable
