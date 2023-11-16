import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
   <div className="left">
   <h1>by:Fidan Hasanova</h1>
   <p>Here you can use rows and columns to <br />organize your footer content. <br /> Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.</p>
   </div>
   <div className="middle">
    <h1>Product</h1>
    <ul>
        <li>Angular</li>
        <li>React</li>
        <li>Vue</li>
        <li>Laravel</li>
    </ul>
   </div>
   <div className="right">
    <h1>USEFUL LINKS</h1>
    <ul>
        <li>Pricing</li>
        <li>Settings</li>
        <li>Orders</li>
        <li>Help</li>
    </ul>
   </div>
      </footer>
    </div>
  )
}

export default Footer
