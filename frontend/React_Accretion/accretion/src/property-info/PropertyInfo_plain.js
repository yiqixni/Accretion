import {useParams} from 'react-router-dom'; 
import {
        useState, 
        useEffect,
        useContext, 
        createContext
    } from 'react';

import Order from '../order/Order'; 
import OrderBookChart from '../order-book/OrderBookChart';

import './PropertyInfo.css'; 

export default function PropertyInfo () {
    const { id } = useParams(); 
    const [images, setImages] = useState([]); 
    const [address, setAddress] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        const getProperty = async () => {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8000/api/buy/?id=${id}`, 
                    {
                        method: "GET", 
                        headers: {
                            // "Authorization": `JWT ${jwt.access}` 
                        }
                    }
                )
                const data = await response.json(); 
                setImages(data[0].images.map((images)=> images.image));
                setAddress(data[0].address);
                setDescription(data[0].description);
            } 
            catch (error) {
                console.log(error)
            }
        }

        getProperty(); 
    }, [])
    
    return (
        <div>
            <div className='three-column-container'>
                <div className='images'>
                    <img 
                        className='image-lead' 
                        src={images[0]}
                    />
                </div>
                <div className='buy-sell-tab'>
                    <Order />
                </div>
            </div>
            <div className='three-column-container'> 
                <div className='property-details'>
                    <h6>Location</h6>
                    <p>
                        {address} 
                    </p>
                    <h6>What's special</h6>
                    <p>
                        {description} 
                    </p>
                </div>
                <div className='bid-ask-chart'>
                    <h5>Bid/ask chart</h5>
                    <OrderBookChart />
                </div>
            </div>
            
        </div>
        
    )
}