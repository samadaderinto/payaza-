import { FC, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import 'reactjs-popup/dist/index.css'
import  Popup  from "reactjs-popup";




 export const PopUp:FC = () => {

     const [showPopup, setShowPopup] = useState(true)

     return(
         <Popup open={showPopup} position={"right center"} closeOnDocumentClick>
             <div id="popupNewsletter" className="newslettermodal--classic fancybox-content" style={{display: "inline-block", width: '100%', height: '100%'}}>
                 <div style={{position: 'absolute', right: 10, top: 10}} onClick={() => setShowPopup(false)}><i className="icon-close"></i></div>
                 <Row className="align-items-center">
                     <Col className="d-sm-block">
                         <div className="popup-newsletter-image image-container" style={{paddingBottom: "160.0%"}}>
                             <img className="w-100 ls-is-cached lazyloaded" src="images/popup-image.png" alt=""/>
                         </div>
                     </Col>
                     <Col>
                         <div className="popup-newsletter-content">
                            Appointment Booked Successfully
                         </div>
                     </Col>
                 </Row>
             </div>
         </Popup>
         
     )
 }