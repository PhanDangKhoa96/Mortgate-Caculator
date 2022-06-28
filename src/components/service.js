import React from 'react'

const Service = ({ service }) => {

    const serviceData = service.serviceData.data
    return (
        <section className='section text-center' id='services'>
            <h1 className='text-[#27292E] mb-[3.7rem] font-black text-4xl lg:text-6xl'>{service.title}</h1>
            <div className='gap-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {
                    serviceData.map((s, index) => (
                        <div key={index} className=' py-12 px-9 bg-white shadow-[0_4px_120px_rgba(58, 86, 78, 0.07)]'>
                            <div className='p-4 bg-[#FF8049] rounded-full inline-block mb-11'>
                                <img src={service.pattern.url} alt="" className='w-11 aspect-square' />
                            </div>
                            <h3 className='font-bold text-2xl mb-6'>{s.name}</h3>
                            <p>{s.description}</p>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Service