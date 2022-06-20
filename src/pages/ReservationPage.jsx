import React, { useState } from 'react'
import { MdOutlinePersonAdd } from 'react-icons/md';
import { IoMdCalendar } from 'react-icons/io';
import { BiTimeFive } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


const ReservationPage = ({title}) => {
  const navigate = useNavigate();
  let theDate = new Date()
  let date = theDate.toISOString().split('T')[0]
  let time = `${theDate.getHours()}:${theDate.getMinutes()}`
  console.log(time);
  const [emailData, setEmailData] = useState(
    { name : "", lname: "", email : "", number : "",time : time ,date : date, message: ""} 
    );
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmailData({ ...emailData, [name] : value});
  } 
  const submit = (e)=>{
    e.preventDefault();
    navigate('/thankyou');
  }
  
  return (
    <div className='reservation' >
      <div className="container">
        <div className="title">{title}</div>
        <form onSubmit={submit}>
        <label htmlFor='Name' >Name</label>
        <input type="text"  value={emailData.name} name="name" onChange={handleInput} required/>
        <label htmlFor='E-mail Id'>E-mail Id</label>
        <input type="email"  value={emailData.email} name="email" onChange={handleInput} required/>
        <label htmlFor='Phone No.'>Phone No.</label>
        <input type="number"  value={emailData.number} name="number" onChange={handleInput} required/>
        <label htmlFor='No. of persons' style={ title==='BANQUET HALL'? {display:"none" }:{} } >No. of persons <span> <MdOutlinePersonAdd/> </span> </label>
        <input type="number" style={ title==='BANQUET HALL'? {display:"none" }:{} } value={emailData.person} name="person" onChange={handleInput} required={title==='BANQUET HALL' ? false :true} />
        <label htmlFor='Date' >Date <span> <IoMdCalendar/> </span> </label>
        <input type="date"  value={emailData.date} name="date" onChange={handleInput} required/>
        <label htmlFor='Time' >Time <span> <BiTimeFive/> </span> </label>
        <input type="time" value={emailData.time} name="time" onChange={handleInput}  required/>
        <label htmlFor='Date'>Give Instructions <span>(optional)</span> </label>
        <textarea name="message" rows="10" cols="30"  value={emailData.message} onChange={handleInput}/>
        <button>Book Now</button>
        </form>
        <div className="details">
          <div className="upper">Note*</div>
          <div className="lower">
            For immediate booking of any kind of private parties, events, marriage, meetings or any other occasion, please contact us on <span> 800-190-4222 </span>or mail us on <span> theterrace123@gmail.com</span>
          </div>
        </div>
      </div>
    <ScrollToTop/>
    </div>
  )
}

export default ReservationPage