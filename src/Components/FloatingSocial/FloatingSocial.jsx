import React from 'react'
import './FloatingSocial.css'

function FloatingSocial() {
    return (
        <div className="floating-social">
            <div className="social-buttons">
                <a 
                    href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn whatsapp-btn"
                    title="Contact us on WhatsApp"
                >
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a 
                    href="https://line.me/ti/p/YOUR_LINE_ID" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn line-btn"
                    title="Contact us on LINE"
                >
                    <i className="fab fa-line"></i>
                </a>
                <a 
                    href="https://m.me/YOUR_FACEBOOK_PAGE_USERNAME" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn messenger-btn"
                    title="Contact us on Facebook Messenger"
                >
                    <i className="fab fa-facebook-messenger"></i>
                </a>
            </div>
        </div>
    )
}

export default FloatingSocial
