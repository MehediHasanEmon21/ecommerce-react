import React from 'react'

const Banner = ({cssId, cssClass, children}) => {
  return (
    <section id={cssId} className={cssClass}>
        {children}
    </section>
  )
}

export default Banner
