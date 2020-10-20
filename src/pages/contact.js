import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

function ContactPage() {

    const myInfo = {
        phone: '347-497-0802',
        email: 'ross.stevenedward@gmail.com',
        website: 'www.steven-ross.com'
    }

    const postMyInfo = (myInfo) => {
        return (
            Object.keys(myInfo).map((item, i) => {
                return (
                    <ul>
                        <li style={{listStyleType: "none"}} key={i}>{item.charAt(0).toUpperCase()+item.slice(1)}: {myInfo[item]}</li>
                    </ul>
                )
            })
        )
    }

    return (
        <div>
            <Header />
            <h1>My Contact Info</h1>
            {postMyInfo(myInfo)}
            <Footer />
        </div>
    )
}

export default ContactPage
