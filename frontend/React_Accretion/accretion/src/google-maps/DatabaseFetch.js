import React, {useState, useEffect} from "react";  
import ContactUs from "../contact-us/ContactUs";

// import Config from "../Config";
// import './UploadForm.css'

export default function DatabaseFetch({ addressData }) {
    console.log("inside DatabaseFetcj")
    console.log(addressData)
    const street_name = addressData.address_components[1].long_name; 
    const street_number = addressData.address_components[0].short_name;
    const state = addressData.address_components[5].long_name; 
    const county = addressData.address_components[4].long_name;               

    const [propertyData, setPropertyData] = useState({
        "address": "",
        "description": "", 
        "asking_price": "", 
        "shares": ""
    });

    const [images, setImages] = useState([]); 
        
    const submitHandler = async (event) => {
        event.preventDefault();
        
        const jwt = JSON.parse(localStorage.getItem('jwt'));

        const formData = new FormData(); 

        formData.append('address', propertyData.address);
        formData.append('description', propertyData.description);
        formData.append('asking_price', propertyData.asking_price);
        formData.append('shares', propertyData.shares);

        images.forEach((image, index) => {
            formData.append("uploaded_images", image);
        });
        
        
        console.log("formData:", formData);       

        const response = await fetch("backend.accretion.life", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-microsoftajax": "Delta=true",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.masslandrecords.com/MiddlesexSouth/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `ScriptManager1=SearchFormEx1%24UpdatePanel%7CSearchFormEx1%24btnSearch&ScriptManager1_HiddenField=%3B%3BAjaxControlToolkit%2C%20Version%3D3.5.40412.0%2C%20Culture%3Dneutral%2C%20PublicKeyToken%3D28f01b0e84b6d53e%3Aen-US%3A1547e793-5b7e-48fe-8490-03a375b13a33%3Aeffe2a26%3B%3BAjaxControlToolkit%2C%20Version%3D3.5.40412.0%2C%20Culture%3Dneutral%2C%20PublicKeyToken%3D28f01b0e84b6d53e%3Aen-US%3A1547e793-5b7e-48fe-8490-03a375b13a33%3A475a4ef5%3A5546a2b%3A497ef277%3Aa43b07eb%3Ad2e10b12%3A37e2e5c9%3A5a682656%3A1d3ed089%3Af9029856%3Ad1a1d569%3B&__VIEWSTATE=&Navigator1%24SearchOptions1%24DocImagesCheck=on&SearchFormEx1%24ACSTextBox_StreetNumber=22&SearchFormEx1%24ACSTextBox_StreetName=tufts&SearchFormEx1%24ACSDropDownList_Towns=-2&SearchFormEx1%24ACSTextBox_Description=&SearchFormEx1%24ACSTextBox_DateFrom=1%2F1%2F1900&SearchFormEx1%24ACSTextBox_DateTo=3%2F22%2F2024&ImageViewer1%24ScrollPos=&ImageViewer1%24ScrollPosChange=&ImageViewer1%24_imgContainerWidth=0&ImageViewer1%24_imgContainerHeight=0&ImageViewer1%24isImageViewerVisible=true&ImageViewer1%24hdnWidgetSize=&ImageViewer1%24DragResizeExtender_ClientState=&CertificateViewer1%24ScrollPos=&CertificateViewer1%24ScrollPosChange=&CertificateViewer1%24_imgContainerWidth=0&CertificateViewer1%24_imgContainerHeight=0&CertificateViewer1%24isImageViewerVisible=true&CertificateViewer1%24hdnWidgetSize=&CertificateViewer1%24DragResizeExtender_ClientState=&DocList1%24ctl03=&DocList1%24ctl05=&DocDetails1%24PageSize=&DocDetails1%24PageIndex=&DocDetails1%24SortExpression=&BasketCtrl1%24ctl01=&BasketCtrl1%24ctl03=&__EVENTTARGET=&__EVENTARGUMENT=&__LASTFOCUS=&__ASYNCPOST=true&SearchFormEx1%24btnSearch.x=59&SearchFormEx1%24btnSearch.y=13`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });


        if (response.ok) {
            const data = await response.json(); 
            console.log(data);
        }
    }
    
    

    
    
    return (
        <div className="upload-form">
            {state!="Massachusetts" && (
                <div>
                    <p>We are rolling out service to {state}!</p>
                    <p>Please contact us to learn more</p>
                    <ContactUs />
                </div>
            )}
            {state=="Massachusetts" && (
                <div>
                    <p>We are currently building service to {state}!</p>
                    <p>Please contact us to learn more</p>
                    <ContactUs />
                </div>
            )}
        </div>
    )

}

