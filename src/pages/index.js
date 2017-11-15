import React from "react"
import Container from "../components/container"
import Link from "gatsby-link"

export default () =>
<div>
  <Container>
    <h1> Languages and Technologies I am familiar with </h1>
  </Container>
  <Container>
    <div style={{display: "flex", "flex-wrap": "wrap", "justify-content": "center"}}>

      <div style={{display: "flex", "flex-wrap": "wrap", "justify-content": "center"}}>
        <div style={{margin: "25px", "min-width": "300px"}}>
          <h2> Front-End </h2>
          <p><a href="https://github.com/mttrys/JavaScript30/blob/a757827c1512ec245f81cbccd8bb7c013170ee4c/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/index-START.html#L99-L123"> JavaScript </a></p>
          <p><a href="https://github.com/mttrys/JavaScript30/commits/master"> HTML5 </a></p>
          <p><a href="https://github.com/mttrys/JavaScript30/commits/master"> CSS3 </a></p>
          <p><a href="https://github.com/mttrys/JavaScript30/commits/master"> jQuery </a></p>
          <p><a href="https://github.com/mttrys/reactnd-project-myreads-starter/tree/master/src/components"> React </a></p>
          <p> Redux </p>
        </div>


        <div style={{margin: "25px", "min-width": "300px"}}>
          <h2>Back-End</h2>
          <p>Node</p>
          <p>Express</p>
          <p><a href="https://github.com/mttrys/promises/tree/master/exercises/bare_minimum"> Promises </a></p>
          <p><a href="https://github.com/mttrys/databases/blob/7068554c11afaea686796b3374cc0f5dd5e0f19c/server/models/index.js"> SQL Queries </a></p>
          <p><a href="https://github.com/mttrys/databases/blob/5993747cc5c5bd8b110a65ee4684f8fb9649d4c7/server/schema.sql "> SQL Schemas </a></p>
        </div>
      </div>

      <div style={{display: "flex", "flex-wrap": "wrap", "justify-content": "center"}}>
        <div style={{margin: "25px", "min-width": "300px"}}>
          <h2>Tools</h2>
          <p> Git </p>
          <p><a href="https://github.com/mttrys"> Github </a></p>
          <p> Selenium </p>
          <p> Python 2.7 </p>
          <p> BeautifulSoup </p>
          <p> EC2 </p>
          <p> SSH </p>
          <p> Jest </p>
        </div>

        <div style={{margin: "25px", "min-width": "300px"}}>
          <h2>CompSci Fundamentals</h2>
          <p><a href="https://github.com/mttrys"> Data Structures & Algos </a></p>
          <p><a href="https://github.com/mttrys"> Programming Paradigms </a></p>
          <p><a href="https://github.com/mttrys"> Big-O </a></p>
        </div>
      </div>

    </div>
  </Container>
</div>