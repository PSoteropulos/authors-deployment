import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditAuthor = (props) => {

    const {id} = useParams()

    const navigate = useNavigate()

    const [formData, setFormData] = useState({name:""})
    const [errors, setErrors] = useState({})
    const [notFoundError, setNotFoundError] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res)=>{
                console.log(res)
                setFormData(res.data)
            }).catch((err)=>{
                console.log(err)
                setNotFoundError("An author with that ID does not exist.")
            })
    }, [])

    const handleChange= (e) => {
        let key=e.target.name;
        let value=e.target.value;
        setFormData({...formData, [key]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${formData._id}`, {
            name: formData.name
        })
        .then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)})
    }

    return (
        <div className='g-0 bg-secondary p-3' style={{minHeight:'100vh'}}>
            <h1>Favorite Authors</h1>
            <Link style={{fontSize:22, color:"black", textDecoration:"none"}} to={'/'}>Home</Link>
            {notFoundError?
                <div>
                <h2>{notFoundError}</h2>
                <h3>Click <Link style={{textDecoration:'none'}} to={'/new'}>here</Link> to add a new author, or <Link style={{textDecoration:'none'}}to={'/'}>here</Link> to return home.</h3>
                </div>
                :
                <div>
                    <h4 className='mt-3'>Edit an author</h4>
                    <form className='col-3 mx-auto mt-5' onSubmit={handleSubmit}>
                        <label className='form-label h5'>Author Name:</label>
                        <input type="text" name="name" className='form-control mt-2' onChange={(e)=>handleChange(e)} value={formData.name}/>
                        {errors.name && <span className='text-warning'>{errors.name.message}</span>}<br/>
                        <Link to="/"> <button className='btn btn-info m-3'>Cancel</button></Link>
                        <button className='btn btn-primary m-3'>Submit</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default EditAuthor