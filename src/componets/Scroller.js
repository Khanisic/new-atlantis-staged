import React, { useEffect, useState } from 'react'
import './Scroller.css';
import funding from '../s5.jpg'
import measurement from '../s5_p2.jpg'
import restoration from '../s5_p3.jpg'

function Scroller() {


    const [selectedHeading, setSelectedHeading] = useState('funding')
    const [screenSize, setScreenSize] = useState('')


    window.onscroll = function () {
        var scrollTop = window.pageYOffset;
        var windowWidth = window.innerWidth;

        var horLength = document.querySelector(".element-wrapper").scrollWidth;
        var distFromTop = document.querySelector(".horizontal-section").offsetTop;
        var scrollDistance = distFromTop + horLength - windowWidth;

        document.querySelector(".horizontal-section").style.height = horLength + "px";
        if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
            document.querySelector(".element-wrapper").style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
        }
    }


    const fundingClick = () => {
        var scrollTop = window.pageYOffset;

        var distFromTop = document.querySelector(".horizontal-section").offsetTop;

        window.scrollBy(0, distFromTop - scrollTop);

    }

    const measurementClick = () => {
        var scrollTop = window.pageYOffset;
        var windowWidth = window.innerWidth;

        var distFromTop = document.querySelector(".horizontal-section").offsetTop;


        var scrollThisMuch = (distFromTop - scrollTop) + (windowWidth)

        window.scrollBy(0, scrollThisMuch);

    }

    const restorationClick = () => {
        var scrollTop = window.pageYOffset;
        var windowWidth = window.innerWidth;

        var distFromTop = document.querySelector(".horizontal-section").offsetTop;

        var scrollThisMuch = (distFromTop - scrollTop) + (2 * windowWidth)

        window.scrollBy(0, scrollThisMuch);

    }

    useEffect(() => {

        if (window.innerWidth > 786) {
            setScreenSize('laptop')
        }
        else {
            setScreenSize('mobile')
        }

    }, [])



    return (
        <>
            {
                screenSize === 'laptop' ?
                    <div class="horizontal-section">
                        <div class="sticky-wrapper">
                            <div className='headingsDiv'>
                                <p className='headingChallenges'>Challenges</p>
                                <div className='headings'>
                                    <p onClick={() => { fundingClick() }} className={` ${selectedHeading === 'funding' ? 'selectedHeading' : 'headingSmall'} `}>Funding</p>
                                    <p onClick={() => { measurementClick() }} className={` ${selectedHeading === 'measurement' ? 'selectedHeading' : 'headingSmall'} `}>Measurement</p>
                                    <p onClick={() => { restorationClick() }} className={` ${selectedHeading === 'restoration' ? 'selectedHeading' : 'headingSmall'} `}>Restoration</p>
                                </div>
                            </div>
                            <div class="element-wrapper">
                                <div onMouseEnter={() => { setSelectedHeading('funding') }} class="element">
                                    <div className='outer'>
                                        <div className='innerLeft'>
                                            <p className='innerHeading'>Funding</p>
                                            <p className='innerP'>By developing the blue carbon and ecosystem service economy, we unlock massive amounts of funding for MPAs. By selling NFTs, we join together to kick start the process and participate in the solution</p>
                                        </div>
                                        <div className='innerRight'>
                                            <img src={funding} alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div onMouseEnter={() => { setSelectedHeading('measurement') }} class="element">
                                    <div className='outer'>
                                        <div className='innerLeft'>
                                            <p className='innerHeading'>Measurement</p>
                                            <p className='innerP'>MPAs need funding and technology to measure their change over time. New Atlantis is pioneering new technologies to measure the ocean metagenome using inexpensive hardware and AI.</p>
                                        </div>
                                        <div className='innerRight'>
                                            <img src={measurement} alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div onMouseEnter={() => { setSelectedHeading('restoration') }} class="element">
                                    <div className='outer'>
                                        <div className='innerLeft'>
                                            <p className='innerHeading'>Restoration</p>
                                            <p className='innerP'>Our work funds fish nursery protection, pollution remediation, coral restoration, and coastline mangrove replanting, and programming to teach locals sustainable management of this critical resource.</p>
                                        </div>
                                        <div className='innerRight'>
                                            <img src={restoration} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className='outer'>
                            <div className='innerLeft'>
                                <p className='innerHeading'>Funding</p>
                                <p className='innerP'>By developing the blue carbon and ecosystem service economy, we unlock massive amounts of funding for MPAs. By selling NFTs, we join together to kick start the process and participate in the solution</p>
                            </div>
                            <div className='innerRight'>
                                <img src={funding} alt='' />
                            </div>
                        </div>
                        <div className='outer'>
                            <div className='innerLeft'>
                                <p className='innerHeading'>Measurement</p>
                                <p className='innerP'>MPAs need funding and technology to measure their change over time. New Atlantis is pioneering new technologies to measure the ocean metagenome using inexpensive hardware and AI.</p>
                            </div>
                            <div className='innerRight'>
                                <img src={measurement} alt='' />
                            </div>
                        </div>
                        <div className='outer'>
                            <div className='innerLeft'>
                                <p className='innerHeading'>Restoration</p>
                                <p className='innerP'>Our work funds fish nursery protection, pollution remediation, coral restoration, and coastline mangrove replanting, and programming to teach locals sustainable management of this critical resource.</p>
                            </div>
                            <div className='innerRight'>
                                <img src={restoration} alt='' />
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default Scroller