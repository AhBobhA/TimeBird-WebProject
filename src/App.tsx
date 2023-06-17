import { useState } from 'react'
import uniLogo from './assets/uniLogo.svg'
import iconDash from './assets/iconDash.svg'
import iconRegis from './assets/iconRegis.svg'
import iconResult from './assets/iconResult.svg'
import banner from './assets/banner.svg'
import image from './assets/image.svg'
import profile from './assets/profile.svg'
import caretdown from './assets/caretdown.svg'
import './App.css'
import './App1.css'
import './App2.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
    
    <nav className='sidebar'>
      <div className='side'>
        <a className='active' href="#" target="_blank">
          <img src={uniLogo} className="logo" alt="Uni logo" />
        </a>
        </div>
        
        <div>
        <a href="#" target="_blank">
          <img src={iconDash} className="iconD" alt="Dash" /><p className='D_text'>Dashboard</p>
        </a>
        </div>
        
        <div>
        <a href="#" target="_blank">
          <img src={iconResult} className="iconR" alt="Result" /><p className='D_text'>Result</p>
        </a>
        </div>
        <div>
        <a href="#" target="_blank">
          <img src={iconRegis} className="iconRe" alt="Regis" /><p className='D_text'>Course Registration</p>
        </a>
     </div>
      </nav>
<header>  
<div className='top_bar'>
<h2 className='top_text'>Dashboard</h2>
</div>
<div className='profile'>
<a href="#" target="_blank">
  <img src={profile} className="profile_logo" alt="Regis" />
</a>
<h2 className='profile_text'>John B.Doe</h2>
<a href="#" target="_blank">
  <img src={caretdown} className="profile_caret" alt="Regis" />
  </a>
</div>
</header>

<img src={banner} className="banner" alt="Banner" /><p className='text_banner1'>WELCOME BACK, JOHN!</p>
<p className='text_banner2'>You have some notifications. Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
<img src={image} className="image" alt="Image" />
<button type="button" id="myButton" className="btn-primary">Learn More</button>

<div className='Courses'>
<h4>Courses</h4>
</div>



<div className='Courses1'>

<div className='content_courses'>
<p className='p1'>
Advanced Web Development</p>
<span>COS30020</span>
<span className='result1'>Result</span>
<div>
  <br></br>
 <span className='widget_start'>Start Date</span> 
 <span className='widget_end'>End Date</span>
<span>
  <progress className='widget_progress' value="50" max="100"></progress>
</span>
<span className='progress1'>50%</span>
</div> 

<div className='widget_1'>
<span className='widget_days'><div className='rectangle'>dd/mm/yyyy</div></span>
<span className='widget_ends'><div className='rectangle2'>dd/mm/yyyy</div></span>
</div>
</div>

</div>

<div className='Courses2'>

<div className='content_courses'>
<p className='p1'>
Advanced Web Development</p>
<span>COS30020</span>
<span className='result1'>Result</span>
<div>
<br></br>
 <span className='widget_start'>Start Date</span> 
 <span className='widget_end'>End Date</span>
<span>
  <progress className='widget_progress' value="50" max="100"></progress>
</span>
<span className='progress1'>50%</span>
</div> 

<div className='widget_1'>
<span className='widget_days'><div className='rectangle'>dd/mm/yyyy</div></span>
<span className='widget_ends'><div className='rectangle2'>dd/mm/yyyy</div></span>
</div>
</div>

</div>

<div className='Courses3'>

<div className='content_courses'>
<p className='p1'>
Advanced Web Development</p>
<span>COS30020</span>
<span className='result1'>Result</span>
<div>
<br></br>
 <span className='widget_start'>Start Date</span> 
 <span className='widget_end'>End Date</span>
<span>
  <progress className='widget_progress' value="50" max="100"></progress>
</span>
<span className='progress1'>50%</span>
</div> 

<div className='widget_1'>
<span className='widget_days'><div className='rectangle'>dd/mm/yyyy</div></span>
<span className='widget_ends'><div className='rectangle2'>dd/mm/yyyy</div></span>
</div>
</div>

</div>

<div className='Courses4'>

<div className='content_courses'>
<p className='p1'>
Advanced Web Development</p>
<span>COS30020</span>
<span className='result1'>Result</span>
<div>
<br></br>
 <span className='widget_start'>Start Date</span> 
 <span className='widget_end'>End Date</span>
<span>
  <progress className='widget_progress' value="50" max="100"></progress>
</span>
<span className='progress1'>50%</span>
</div> 

<div className='widget_1'>
<span className='widget_days'><div className='rectangle'>dd/mm/yyyy</div></span>
<span className='widget_ends'><div className='rectangle2'>dd/mm/yyyy</div></span>
</div>
</div>

</div>
<footer>
  <div className='footer'>
  <h6>Footer</h6></div>
</footer>
    </body>
  )
}

export default App