import './QrCode.css';

import { useState } from "react"


export const QrCode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("https://gokul154.neocities.org/G/")
    const [qrSize, setQrSize] = useState("");

   async function generateQR() {
    setLoading(true);
    try {
        const url = `https://api.qrserver.com/v1/create-qr-code/?siz=${qrSize}x${qrSize}&data= ${encodeURIComponent(qrData)}`;
        setImg(url);
    }catch (error) {
        console.error('Error generating QR code',error);
    }finally{
        setLoading(false);
    }

        
   }
   function downloadQR() {
    fetch(img).then((Response)=>Response.blob().then((blob)=>{
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download="CustomQR.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }) );
   }
  return (
    <div className="app-containr">
        <h1> " Custom QR Generator "</h1>
        { loading && <p>Please wait...</p> }
        {img && <img src={img}  className="qr-img"></img>}
    <div>
        <label htmlFor="dataInput" className="input-label">
            Data for QR Code
        </label>
        <input type="text" value={qrData} id="dataInput" placeholder="Enter URL for QR Code "onChange={(e)=>setQrData(e.target.value)}/>
        <label htmlFor="sizeInput" className="input-label">
            Image size (e.g., 150):
        </label>
        <input type="text" value={qrSize} id="sizeInput" placeholder="Enter Image size" onChange={(e)=>setQrSize(e.target.value)}/>
        <button className="generate" onClick={generateQR}>Generate QR</button>
        <button className="download"onClick={downloadQR}>Download QR</button>
        
        </div>   
        <p className='footer'> © G o k u l </p>
    </div>
  )
}
