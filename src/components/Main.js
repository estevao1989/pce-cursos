import React from 'react'
import './Main.css'

export default props =>
   <main className="main-panel">
      <div className="content">
         {props.children}
        </div>
   </main>
