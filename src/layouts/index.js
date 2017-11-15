import React from "react"
import Link from "gatsby-link"

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: '100%', padding: `1.25rem 1rem` }}>


    <header>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline`, "font-size":"32px" }}>Matthew Reyes</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/">Code</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
      </ul>
    </header>


    {children()}

    <footer>
      <ul style={{ listStyle: `none`, float: `right`, padding: `1.25rem .5rem`}}>
        <a href="mailto:career4mttrys@gmail.com" style={{padding: `1.25rem .5rem`}}>Email</a>
        <a href="https://www.linkedin.com/in/matthewareyes/" style={{padding: `1.25rem .5rem`}}>LinkedIn</a>
        <a href="https://www.github.com/mttrys/" style={{padding: `1.25rem .5rem`}}>Github</a>
        <a href="https://www.instagram.com/mttrys/" style={{padding: `1.25rem .5rem`}}>Instagram</a>
        <ListLink to="/projects/" style={{padding: `1.25rem .5rem`}}>Resume</ListLink>
      </ul>
    </footer>


  </div>

