import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
const ListLink = props =>
<li style={{ display: `inline-block`, marginRight: `1rem` }}>
  <Link to={props.to}>
    {props.children}
  </Link>
</li>

const outLinks = [
  {
    name: "Github",
    link: 'https://github.com/dougecox'
  }, {
    name: "LinkedIn",
    link: 'https://Linkedin.com/in/dougecox'
  }, {
    name: "Twitter",
    link: 'https://github.com/dougecox'
  }
]

const Header = () => (
  <div
    style={{
      background: '#3bedde',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'grey',
            textDecoration: 'none',
          }}
        >
          Douglas Cox Portfolio Page
        </Link>
      </h3>
      <ul style={{  float: `right` }}>
          {outLinks.map((link, idx) => (
            <li key={link.name} style={{
              display: 'inline',
              color: 'grey',
              'a:hover': 'white'}}>
              <a  target="_blank" rel="nofollow" className="outLinks" href={link.link} >
                <span className='text' >  {link.name}  |</span>
              </a>
            </li>
          ))}

      </ul>
      
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Devloper Doug"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
