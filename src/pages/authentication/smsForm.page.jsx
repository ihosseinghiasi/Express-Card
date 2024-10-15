import '../../css/shop/smsForm.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SmsForm = () => {

    const [phoneNumber, setPhoneNumber] = useState()
    const navigate = useNavigate()
    
    async function sendPhoneNumber(event) { 
        event.preventDefault()
        console.log(phoneNumber)
        await axios.post('http://localhost:4000/authentication/setPhoneNumber', {phoneNumber}).then((res)=> {
            console.log(res.data)
        })
        navigate('/confirmSmsForm')
    }
    
    return ( 
        <>
            <div className="registerSmsForm"></div>    
            <div className="smsForm">
                <p className="mt-4">شماره همراه</p>
                <form onSubmit={sendPhoneNumber} >
                    <input type="text" className="smsText form-control w-75"
                        placeholder='شماره همراه' name="phoneNumber" id="phoneNumber"
                        onChange={(event)=> setPhoneNumber(event.target.value)} />
                    <button type="submit" className="btn btn-danger mt-4">ارسال پیامک</button>
                </form>
            </div>
        </>
     );
    }
 
export default SmsForm;