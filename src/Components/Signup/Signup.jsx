import React from 'react'

export default function () {

    let obj={
        first_name : '',
        last_name : '',
        email : '',
        password : ''
    }
    function getFormData({target}){
        obj[target.name] = target.value;
        console.log(obj);
    }
  return (
    <>
    <h1 className='mb-4'>Registration Form</h1>
    <form>
        <label htmlFor="first_name">First Name</label>
        <input onChange = {getFormData} type="text" className='form-control my-3' name='first_name' id='first_name' />

        <label htmlFor="last_name">Last Name</label>
        <input onChange = {getFormData} type="text" className='form-control my-3' name='last_name' id='last_name' />

        <label htmlFor="email">Email</label>
        <input onChange = {getFormData} type="email" className='form-control my-3' name='email' id='email' />

        <label htmlFor="password">Password</label>
        <input onChange = {getFormData} type="password" className='form-control my-3' name='password' id='password' />

        <button className='btn btn-primary float-end'>Sign up</button>
    </form>
    </>
  )
}
