import React from 'react'
import '../App.css'
import Introimg from '../Images/Intro_Brain.svg'
import Flashimg from '../Images/Intro_Featured_Image_Empty.svg'

const Home = () => {

  return (
    <header className='header'>
      <div className='navbar'>
        <input type='checkbox' id='openSidebarMenu' />
        <label for='openSidebarMenu' className='sidebarIconToggle'>

          <div className='spinner top'></div>
          <div className='spinner middle'></div>
          <div className='spinner bottom'></div>

        </label>
        <div id='sidenavbarMenu'>
          <ul className='menu'>
            <li>
              <a href='#'>Home</a>
            </li>

            <li>
              <a href='#'>Services</a>
            </li>

            <li>
              <a href='#'>Contact</a>
            </li>

            <li>
              <a href='#'>About Us</a>
            </li>

          </ul>

        </div>


      </div>




      <section>
        <div className='leftside'>
          <img src={Introimg} height='500px' className='intro' />
          <img src={Flashimg} height='500px' className='flash' />
        </div>
        <div className='rightside'>
          <h1>BOOTCAMP NINJA REACT</h1>
          <p>We Serve the Nation by serving Tech Education</p>
          <button>React</button>
        </div>
      </section>
    </header>

  )
}
export default Home;

