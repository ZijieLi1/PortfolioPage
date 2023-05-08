
import './App.css';
import Wave from 'react-wavify'
import LinkedCard from './components/LinkedCard';
import React, { useState } from 'react';
import { Button, Typography, List, ListItem } from '@mui/joy';
import SmallGap from './components/SmallGap';
import CircleSelfie from './CircleSelfie.png'

function App() {
  const [content, setContent] = useState("aboutme")
  return (
    <>
      <div style={{ backgroundColor: '#e09eb4', transform: 'rotate(180deg)', position: 'fixed', width: '100%', height: '10px' }} />
      <Wave fill='#e09eb4'
        paused={false}
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.15,
          points: 10
        }}
        style={{
          transform: 'rotate(180deg)',
          position: 'fixed',
          zIndex: -1,
        }}
      />
      <img src={CircleSelfie} alt="Zijie Selfie" style={{ alignSelf: 'center', marginTop: '40px', height: '100px', width: 'auto', zIndex: 1 }} />
      <Typography alignSelf="center">Zijie Li</Typography>
      <div style={{ width: '96%', paddingTop: '20px', alignSelf: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }} >
        <Button variant={content === "aboutme" ? "soft" : "outlined"} color="info" onClick={() => { setContent("aboutme") }}> About Me</Button>
        <Button variant={content === "linkedpage" ? "soft" : "outlined"} onClick={() => { setContent("linkedpage") }} color="info">Linked Page</Button>
        <Button variant={content === "projects" ? "soft" : "outlined"} onClick={() => { setContent("projects") }} color="info">My Projects</Button>
      </div>
      <SmallGap />
      {content === "aboutme" &&
        <div style={{ width: '96%', maxWidth: '700px', paddingTop: '10px', alignSelf: 'center', display: 'flex', flexDirection: 'column' }} >
          <Typography fontWeight="lg" alignSelf="center">
            Who am I and why do I code?
          </Typography>
          <Typography>
            As a 3rd year undergraduate Software Engineering student at the University of New South Wales, my name is Zijie and I have a deep interest in the complete software development life cycle. I take pleasure in the process of conceptualizing, designing, constructing, deploying, and maintaining software projects. Furthermore, completing challenges and goals I've set at the beginning makes me very proud and satisfying!
          </Typography>
          <SmallGap />
          <Typography fontWeight="lg" alignSelf="center">
            What direction am I aiming towards?
          </Typography>
          <Typography>
            My goal is to establish an AI environment that is accessible to all end-users. I aim to integrate AI technology into the products that people use every day in order to boost their productivity, improve usability, and, most importantly, enhance their overall user experience.
          </Typography>
          <SmallGap />
          <Typography fontWeight="lg" alignSelf="center">
            My tech stack
          </Typography>
          <ul>
            <li><Typography>
              backend dev: Python -- Flask, Graphql.
            </Typography></li>
            <li><Typography>
              database: PostGrey, AWS DynamoDB, 
            </Typography></li>
            <li><Typography>
              frondend dev: html, css, js, React.js framework.
            </Typography></li>
            <li><Typography>
              dev op: Git, AWS terraform.
            </Typography></li>
            <li><Typography>
              other: Robotic Operating System(ROS), prolog.
            </Typography></li>
            <li><Typography>
              design and documentation: Figma, Swagger.
            </Typography></li>
          </ul>
        </div>
      }
      {content === "linkedpage" &&
        <div style={{ width: '96%', maxWidth: '700px', paddingTop: '10px', alignSelf: 'center' }} >
          <LinkedCard name='GitHub' url='https://github.com/ZijieLi1' icon=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg> />
          <LinkedCard name='LinkedIn' url='https://www.linkedin.com/in/zijie-li-434957244/' icon=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> />
          <LinkedCard name='Instagram' url='https://instagram.com/zijie.li9393?igshid=NTc4MTIwNjQ2YQ==' icon=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg> />
          <LinkedCard name='Email Me' url='mailto:Zijie.li@outlook.com' icon=<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg> />
        </div>
      }
      {content === "projects" &&
        <div style={{ width: '100%', maxWidth: '700px', paddingTop: '10px', alignSelf: 'center' }} >
          <LinkedCard name='Personal Website' url='https://github.com/ZijieLi1/PortfolioPage' icon=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg> endIcon="2023 - Now" />
        </div>
      }
    </>
  );
}

export default App;
