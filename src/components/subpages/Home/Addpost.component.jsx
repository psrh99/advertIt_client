import React,{useState} from 'react';
import NavBar from '../../Navbar/NavBar.component';
import './addpost.styles.css'
import PostServices from '../../../Services/PostServices';
import { useNavigate } from 'react-router-dom';
const AddnewPost =() =>{

    const navigate = useNavigate()
    const [post, setPost] = useState({
        id:"",
        title: "",
        price: "",
        description: "",
        image_url: "",
        category: ""
     })
  
     const handleChange = (e) => {
        const value = e.target.value;
        setPost({...post, [e.target.name]: value})
     }
  
     const savePost = (e) => {
        e.preventDefault()
        PostServices.savePost(post)
           .then((response) => {
            navigate('/')
              console.log(response)
           })
           .catch((error) => console.log(error))
     }

    return(
    <>
    <NavBar/>
    <div className='container'>
        <form>
            
            <label className='label'>
            Title:
            <br />
            <input type="text" name="title" 
                onChange={(e) => handleChange(e)}
                value={post.title}
                className='input-box' 
            />
            </label>
            <br />
            <label className='label'>
            Price:
            <br />
            <input type="text" name="price" 
                onChange={(e) => handleChange(e)}
                value={post.price}
                className='input-box'
            />
            </label>
            <br />
            <label className='label'>
            Description:
            <br />
            <textarea name="description" 
                onChange={(e) => handleChange(e)}
                value={post.description}
                id="" cols="85" rows="6" 
            />
            </label>
            
            {/* <input type="text" name="description" 
                onChange={(e) => handleChange(e)}
                className='input-box'
                value={post.description}
            />                 */}
            <br />
            <label className='label'>
            ImageUrl:
            <br />
            <input type="text" name="image_url" 
                onChange={(e) => handleChange(e)}
                value={post.image_url}
                className='input-box'
            />
            </label>
            <br />
            <label className='label'>
            Category:
            <br />
            <input type="text" name="category" 
                onChange={(e) => handleChange(e)}
                value={post.category}
                className='input-box' 
            />
            </label>
            <br />
            <input type="submit" 
                onClick={savePost}
                value="Submit" className='btn btn-primary sub-btn-addps'/>
            </form>
        </div>
    </>
    )
}

export default AddnewPost;