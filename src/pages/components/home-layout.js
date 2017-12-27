import React from 'react'

function HomeLayout(props){
  return(
    <section className="HomeLayout">
      {props.children}
    </section>
  )
}

export default HomeLayout