import React from 'react'
import './home-layout.css'

function HomeLayout(props){
  return(
    <section
      className = "HomeLayout"
      ref       = {props.handleRefHome}
    >
      {props.children}
    </section>
  )
}

export default HomeLayout
