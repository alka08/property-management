import React from 'react'
const Footer = () => {
    const CurrentYear = new Date().getFullYear()
  return (

    <footer>
        <p>Copyright {CurrentYear}</p>
    </footer>
  )
}

export default Footer;