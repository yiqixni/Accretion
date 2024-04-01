import { useRef, useState, useEffect } from 'react';

import CompanyContactCard from "./CompanyContactCard"; 
// import ContactForm from "./ContactForm";

import './ContactUs.css';

export default function ContactUs () {
    const containerRef = useRef(null); 
    const [fontSize, setFontSize] = useState(16); // Initial font size
    const [containerWidth, setContainerWidth] = useState(0); // Initial container width

    useEffect(() => {
        // Function to update container width
        const updateContainerWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        
        // Update container width on mount and window resize
        updateContainerWidth();
        window.addEventListener('resize', updateContainerWidth);

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateContainerWidth);
        };
    }, []);

    // Update font size when container width changes
    useEffect(() => {
        // Calculate font size based on container width
        const newFontSize = Math.max(16, containerWidth / 45); // Adjust the division value for desired font size responsiveness
        setFontSize(newFontSize);
    }, [containerWidth]);

    return (
        <div className="contact-us">
            <div className="container"> 
                <div className='column' id="title" style={{fontSize:`${fontSize}`}}>                    
                    Contact Us
                </div>
            </div>

            <div className="container">
                <div className='column' id='text'> 
                    <div id="texts">
                        Please let us know how we can assist you. 
                        You feedback allows us to build a modern database and marketplace tailored for the housing market.
                    </div>
                    < CompanyContactCard />
                </div>

                {/* <div className='column'> 
                    < ContactForm/> 
                </div>  */}

            </div>
        </div>
    )
}