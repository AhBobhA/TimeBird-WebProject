
import uniLogo from './assets/uniLogo.svg'
import iconDash from './assets/iconDash.svg'
import iconNoti from './assets/iconNoti.svg'
import profile from './assets/profile.svg'
import caretdown from './assets/caretdown.svg'
import iconSemes from './assets/iconSemes.svg'
import iconCourses from './assets/iconCourses.svg'
import iconUser from './assets/iconUser.svg'
import iconAudit from './assets/iconAudit.svg'
import iconNoti_Indi from './assets/iconNoti_Indi.svg'
import './index.css'


function App() {
 

  return (
<body className='bg-gray-200 h-screen'>
    
    <nav className=' absolute bg-white  h-screen w-[320px] '>
      <div>
        <a href="#" target="_blank">
          <img src={uniLogo} className='absolute w-[185px] h-[175px] left-[68px] '/>
        </a>
      </div>
        
      <div className='mt-[180px] hover:bg-blue-300'>
        <a className='' href="#" target="_blank">
          <img src={iconDash} className=" ml-[20px] h-[22px] inline-block  "/>
          <p className=' inline-flex font-semibold text-base ml-[20px] mt-[20px]'>Dashboard</p>
        </a>
      </div>
        
      <div className='hover:bg-blue-300'>
        <a  href="#" target="_blank">
          <img src={iconNoti} className="ml-[20px] h-[22px] inline-block"/>
          <span className='inline-flex font-semibold text-base ml-[20px] mt-[20px]'>Notification</span>
          <span><img src={iconNoti_Indi} className="ml-[120px] h-[20px] inline-block"></img></span>
        </a>

      </div>
        <br></br>
        <p className='font-bold text-xl ml-[20px]'>Management</p>
        <div className='hover:bg-blue-300'>
        <a href="#" target="_blank">
          <img src={iconSemes} className="ml-[20px] h-[22px] inline-block"/>
          <p className='inline-flex font-semibold text-base ml-[20px] mt-[20px]'>Semester</p>
        </a>

      </div>
      <div className='hover:bg-blue-300'>
        <a href="#" target="_blank">
          <img src={iconCourses} className="ml-[20px] h-[22px] inline-block"/>
          <p className='inline-flex font-semibold text-base ml-[20px] mt-[20px]'>Courses</p>
        </a>

      </div>
      <div className='hover:bg-blue-300'>
        <a href="#" target="_blank">
          <img src={iconUser} className="ml-[20px] h-[22px] inline-block"/>
          <p className='inline-flex font-semibold text-base ml-[20px] mt-[20px]'>User</p>
        </a>

      </div>
      <br></br>
      <p className='font-bold text-xl ml-[20px]'>Moderation</p>

      <div className='hover:bg-blue-300 '>
        <a href="#" target="_blank">
          <img src={iconAudit} className="ml-[20px] h-[22px] inline-block"/>
          <p className='inline-flex font-semibold text-base ml-[20px] mt-[20px]'>Audit Log</p>
        </a>
      </div>
    </nav>


  <div className='absolute w-[1250px] h-[82px] left-[324px] bg-white'>
   <h2 className='ml-[30px] mt-[25px] font-bold text-2xl text-black'>Dashboard</h2>
   </div>
   <div className='absolute w-[344px] h-[82px] left-[1576px] bg-white '>
   <a href="#" target="_blank">
   <img src={profile} className="absolute left-[30px] w-[40px] top-[24%] bottom-[94%]"  />
   </a>
   <h2 className='absolute w-[138px] h-[29px] left-[110px] top-[28px] font-sans text-blue-800 font-medium text-xl'>Tom D. Smith</h2>
   <a href="#" target="_blank">
   <img src={caretdown} className="absolute w-[25px] h-[14.18px] left-[265px] top-[39px]" alt="Regis" />
   </a>
  </div>

<div className='absolute bg-white w-[300px] h-[90px] mt-[98px] ml-[358px]'>
  <div className='absolute inline-block bg-blue-700 w-[10px] h-[90px] '></div>
<p className='text-blue-700 ml-[30px] font-bold text-2xl'>Total Student</p>
<p className='mt-[14px] ml-[30px] font-bold text-2xl'>335</p>
</div>

<div className='absolute bg-white w-[300px] h-[90px] mt-[98px] ml-[758px]'>
<div className='absolute inline-block bg-green-400 w-[10px] h-[90px] '></div>
<p className='text-green-400 ml-[30px] font-bold text-2xl'> Total Teacher</p>
<p className='mt-[14px] ml-[30px] font-bold text-2xl'>35</p>
</div>

<div className='absolute bg-white w-[300px] h-[90px] mt-[98px] ml-[1158px]'>
<div className='absolute inline-block bg-orange-400 w-[10px] h-[90px] '></div>
<p className='text-orange-400 ml-[30px] font-bold text-2xl'>Database Usage</p>
<p className='mt-[14px] ml-[30px] font-bold text-2xl'>30%</p>
</div>

<div className='absolute bg-white w-[300px] h-[90px] mt-[98px] ml-[1558px]'>
<div className='absolute inline-block bg-purple-400 w-[10px] h-[90px] '></div>
<p className='text-purple-400 ml-[30px] font-bold text-2xl'>No. Active Courses</p>
<p className='mt-[14px] ml-[30px] font-bold text-2xl'>11</p>
</div>


<div>
<span className='absolute mt-[240px] ml-[358px] text-sky-700 font-bold text-3xl'>Current Semester Overview</span> 
<span className='absolute mt-[240px] ml-[1190px] text-sky-700 font-bold text-3xl'>Up-coming Semester</span>
</div>

<div className='absolute mt-[300px] ml-[358px] w-[740px] h-[600px] bg-white rounded-lg'>
<p className='mt-[20px] ml-[20px] font-bold text-3xl font-sans'>Summer 2023</p>
<span className='text-green-600 ml-[20px] font-semibold text-lg'>Start Date: 13/01/2023</span>
<span className='text-red-600 font-semibold text-lg ml-[300px]'>End Date: 28/04/2023</span>

<div className='mt-[13px]'>
<span className='absolute inline-block ml-[20px] font-bold'>ID</span>
<span className='absolute inline-block ml-[200px] font-bold'>Course</span>
<span className='absolute inline-block ml-[600px] font-bold'>No.Students</span>
</div>
<div className='absolute mt-[33px] ml-[20px] font-medium'>
  <div className=' h-[60px] w-[700px] border-solid border-2 border-y-indigo-600'>
    <span className=''>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>


</div>

</div>


<div className='absolute mt-[300px] ml-[1158px] w-[740px] h-[600px] bg-white rounded-lg'>
<p className='mt-[20px] ml-[20px] font-bold text-3xl font-sans'>Fall 2023</p>
<span className='text-green-600 ml-[20px] font-semibold text-lg'>Start Date: 13/01/2023</span>
<span className='text-red-600 font-semibold text-lg ml-[300px]'>End Date: 28/04/2023</span>

<div className='mt-[13px]'>
<span className='absolute inline-block ml-[20px] font-bold'>ID</span>
<span className='absolute inline-block ml-[200px] font-bold'>Course</span>
<span className='absolute inline-block ml-[600px] font-bold'>No.Students</span>
</div>
<div className='absolute mt-[33px] ml-[20px] font-medium'>
  <div className=' h-[60px] w-[700px] border-solid border-2 border-y-indigo-600'>
    <span className=''>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>
    <div className='block h-[40px]'>
    <span>COS30020</span> 
    <span className='ml-[105px]'>Advanced Web Development</span> 
    <span className='ml-[225px]'>35</span>
    </div>


</div>
</div>


</body>
  )
}

export default App