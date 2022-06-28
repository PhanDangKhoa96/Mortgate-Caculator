import React, { useState } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const Caculator = ({ caculator }) => {

    // State
    const { advertisement } = caculator
    const figures = caculator.caculatorFigure
    const [figureArray, setFigureArray] = useState({ figures });
    const value = {}

    figureArray.figures.forEach((figure) => {
        const currentValue = Number(figure.currentValue)
        switch (figure.tag_name) {
            case 'purchase-price': {
                value.purchasePriceValue = currentValue
                break;
            }

            case "down-payment": {
                value.downPaymentValue = currentValue
                break;
            }

            case "repayment-time": {
                value.repaymentTimeValue = currentValue
                break;
            }

            case "interest-rate": {
                value.interestRateValue = currentValue
                break;
            }
            default:
                break;
        }
    })

    // Getter
    const calMortage = () => {
        const r = (value.interestRateValue / 100) / 12
        const P = value.purchasePriceValue - value.downPaymentValue
        const n = value.repaymentTimeValue * 12

        const result = P * ((r * Math.pow((1 + r), n)) / ((Math.pow((1 + r), n)) - 1))

        return result.toFixed(2)
    }

    // Methods
    const handleChange = (e) => {
        let updatedArray = figureArray.figures.map((item, index) => {
            if (index === Number(e.target.id)) {
                return { ...item, currentValue: e.target.value }
            }
            return item
        })
        setFigureArray({ figures: updatedArray })
    }

    const numberWithCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // JSX
    return (
        <section className='section grid gap-y-7 items-center md:grid-cols-2' id='caculator'>
            <div className='text-white p-16 md:pr-11 md:pl-0 relative'>
                <span className='absolute h-full bg-primary left-[-999px] right-[-99px] md:right-0 top-0 -z-10'></span>
                <h2 className='font-black text-5xl mb-4'>{caculator.title}</h2>
                <p className='mb-8 text-lg'>{renderRichText(caculator.description)}</p>
                <div className='grid gap-6 xl:grid-cols-2 mb-8'>
                    {figureArray.figures.map((figure, index) => (
                        <div key={index}>
                            <p className='font-black text-lg'>
                                <span className="after:content-[':']">{figure.name}</span> {figure.position === 'front' ? (<span>{figure.unit}{numberWithCommas(figure.currentValue)}</span>) : (<span>{numberWithCommas(figure.currentValue)}{figure.unit}</span>)}
                            </p>
                            <input id={index} type="range" className='w-full input-slider' min='0' max={figure.value} defaultValue={figure.currentValue} onChange={handleChange} />
                        </div>
                    ))}

                </div>
                <p>
                    <span className="after:content-[':_']">{caculator.loanAmountText}</span>
                    <span className="before:content-['$'] text-[#FF8049] text-2xl font-black">{numberWithCommas(value.purchasePriceValue - value.downPaymentValue)}</span>
                </p>
                <p>
                    <span className="after:content-[':_']">{caculator.estimateRepaymentText}</span>
                    <span className="before:content-['$'] text-[#FF8049] text-2xl font-black">{numberWithCommas(calMortage())}</span>
                </p>
            </div>
            <div className='text-center md:text-left md:pl-12'>
                <h2 className='font-black text-6xl text-[#27292E] mb-6'>{advertisement.title}</h2>
                <p className='text-lg text-[#585C65] mb-12'>{renderRichText(advertisement.description)}</p>
                <button className='button'>{advertisement.buttonText}</button>
            </div>
        </section >
    )
}

export default Caculator