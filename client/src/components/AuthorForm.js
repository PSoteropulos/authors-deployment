import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const AuthorForm = (props) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({name:"" })
    const [errors, setErrors] = useState({})

    const handleChange= (e) => {
        // console.log(formData)
        // console.log(e.target.value, e.target.name);
        // console.log(e.target.value)
        let key=e.target.name;
        let value=e.target.value;
        setFormData({...formData, [key]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/addAuthor', {
            name:formData.name
        })
        .then((res)=>{
            console.log(res)
            setFormData({name:""})
            navigate('/')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)})
    }

    return (
        <div className='g-0 bg-secondary p-3' style={{minHeight:'100vh'}}>
            <h1>Favorite Authors</h1>
            <Link style={{fontSize:22, color:"black", textDecoration:"none"}} to={'/'}>Home</Link>
                <div>
                    <h4 className='mt-3'>Add an author</h4>
                    <form className='col-3 mx-auto mt-5' onSubmit={handleSubmit}>
                        <label className='form-label h5'>Author Name:</label>
                        <input type="text" name="name" className='form-control mt-2' onChange={(e)=>handleChange(e)} value={formData.name}/>
                        {errors.name && <span className='text-warning'>{errors.name.message}</span>}<br/>
                        <Link to="/"> <button className='btn btn-info m-3'>Cancel</button></Link>
                        <button className='btn btn-primary m-3'>Submit</button>
                    </form>
                </div>
            
        </div>
    )
}

export default AuthorForm