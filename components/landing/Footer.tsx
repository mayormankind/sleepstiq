import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


export default function Footer() {

    const Company =[
        {label:'About', ref:'/about'},
        {label:'Blog', ref:'/blog'},
        {label:'Contact', ref:'/contact'},
        {label:'Jobs', ref:'/jobs'},
    ]

    const Contacts = [
        {img:"/facebookIcon.png", alt:"facebook icon", ref:'facebook.com'},
        {img:"/twitterIcon.png", alt:"twitter icon", ref:'twitter.com'},
        {img:"/googleIcon.png", alt:"google icon", ref:'mailto:mayowamakinde23@gmail.com'},
        {img:"/linkedin.png", alt:"linkedIn icon", ref:'linkedIn.com'},
    ]

  return (
    <div className='w-full h-full flex py-10 bg-blueShade text-[#ABABAB]'>
        <div className="flex flex-col gap-10 max-w-6xl mx-auto p-4 md:p-8">
            <Image alt='SleepStiq logo' src={'/logo.png'} width={100} height={100} className='mx-auto'/>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="mb-8 md:mb-0">
                    <h2 className="font-semibold text-white mb-4">COMPANY</h2>
                    <ul className='space-y-2 text-[#ABABAB]'>
                        {Company.map((nav,id)=>(
                            <li key={id} className='hover:border-b-2 border-white w-fit'><Link href={nav.ref}>{nav.label}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="mb-8 md:mb-0 w-full">
                    <h2 className="font-semibold text-white mb-4">CONTACT</h2>
                    <ul className='space-y-2 text-[#ABABAB]'>
                        <li>Phone</li>
                        <li className='text-white hover:border-b-2 border-white w-fit'><Link href='tel:+2347085073128'>+234 708 507 3128</Link></li>
                        <li>Address</li>
                        <li className='text-white hover:border-b-2 border-white'>16, Ogindipe Close, Upston  Close</li>
                    </ul>
                </div>
                <div className="mb-8 md:mb-0">
                    <h2 className="font-semibold text-white mb-4">CONSUMER ADVISORY</h2>
                    <p className="text-sm">
                        These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.
                    </p>
                    <p className="text-sm mt-2">
                        By using our website or product, you agree to follow our <span className='text-blue-500'>terms of service.</span>
                    </p>
                </div>
                <div className="flex flex-col gap-6 text-[#ABABAB]">
                    <h2 className="font-semibold text-white">GET IN  TOUCH</h2>
                    <ul className='flex flex-col gap-4'>
                        <li>Feel free to get in touch with us via email.</li>
                        <li className='text-white font-bold text-xl'><a href="mailto:info.webovio@gmail.com">hello@sleepstiq.com</a></li>
                        <div className="flex gap-4 items-center">
                            {Contacts.map((contact,id)=>(
                                <Link key={id} href={contact.ref}>
                                    <Image src={contact.img} width={6} height={6} alt={contact.alt} className='w-6 h-6'/>
                                </Link>
                            ))}
                        </div>
                    </ul>
                    <p className='text-sm mt-4'>© {new Date().getFullYear()} @sleepstiq. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
