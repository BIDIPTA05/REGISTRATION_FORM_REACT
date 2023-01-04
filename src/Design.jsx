import React from 'react'
import { useState, useEffect } from 'react';

const Design = () => {
    
    const data = {
        name: "",
        email: "",
        password: ""
    };

    const [inputData, setinputData] = useState(data);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        console.log("Registered");
    }, [flag]);
    

    const updateData = (event) => {
        setinputData({ ...inputData, [event.target.name]: event.target.value });
        console.log(inputData);
    }

    const secure = (event) => {
        event.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("All Fileds are Mandatory");
        }
        else {
            setFlag(true)
        }
    }

    return (
        <>
            <pre>{(flag) ? <h1 className='ui'> Hello {inputData.name} You have Successfully registered</h1> : null}</pre>
       <form className='container' action="" onSubmit={secure}>
          <div className="header">
              <h1>Registration Form</h1>
          </div>
          <div>
              <input type="text" placeholder='Enter your Name here' name='name' value={inputData.name} onChange={updateData} />
          </div>
            <div>
              <input type="text" placeholder='Enter your E-Mail here' name='email' value={inputData.email} onChange={updateData}/>
          </div>
            <div>
              <input type="password" placeholder='Enter your Password here' name='password' value={inputData.password} onChange={updateData}/>
          </div>
          <div>
              <button type='submit'>
                  Submit
              </button>
          </div>
            </form>
            </>
  )
}

export default Design