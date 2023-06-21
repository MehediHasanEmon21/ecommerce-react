import React from 'react'
import Details from '../components/about/Details'
import Video from '../components/about/Video'
import Feature from '../components/Feature'
import Newsletter from '../components/Newsletter'
import Banner from '../components/Banner'

const About = () => {
  return (
    <>
        <Banner cssId="page-banner" cssClass="about-banner">
            <h2>#Readmore</h2>
            <p style={{color: '#ffffff'}}>Read All Cases studies about product</p>
        </Banner>

        <Details/>

        <Video/>

        <Feature/>

        <Newsletter/>
    </>
  )
}

export default About
