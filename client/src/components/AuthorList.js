import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const AuthorList = (props) => {

    const [list,setList]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allAuthors')
            .then((res)=>{
                console.log(res)
                setList(res.data)
            }).catch((err)=>{
                console.log(err)
            })
    }, [])

    const deleteAuthor = (authorID) => {
        axios.delete(`http://localhost:8000/api/delete/${authorID}`)
            .then(result => {
                console.log(result);
                console.log(result.data);
                setList(list.filter(author => author._id !== authorID))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='bg-secondary p-3' style={{minHeight:'100vh'}}>
            <h1>Favorite Authors</h1>
            <Link style={{fontSize:22, color:"black", textDecoration:"none"}} to={'/new'}>Add a new author</Link>
            <table className='table table-hover table-striped table-dark mt-3'>
                <thead>
                    <tr>
                        <th scope='col'>Author Name</th>
                        <th scope='col'>Available Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((author, index)=>(
                        <tr key={index}>
                            <th style={{verticalAlign:"middle"}}  className="">
                                {author.name}
                            </th>
                            <td>
                                <Link to={`/edit/${author._id}`}><button className='btn btn-primary'>Edit</button></Link>
                                <button onClick={(e)=>deleteAuthor(author._id)} className='btn btn-danger m-2'>Delete</button>
                                {/* <Link style={{fontSize:20, textDecoration:"none", color:"black"}}to={`/onemovie/${movie._id}`}>{movie.title}</Link> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList