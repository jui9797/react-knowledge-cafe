import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, reading_time,posted_date, hashtags} =blog;
    // console.log(blog)
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`}></img>
            <div className='flex justify-between mb-4'>
              <div className='flex'>
              <img className='w-14' src={author_img} alt=''></img>
              <div className='ml-6'>
               <h3 className='text-2xl'>{author}</h3>
               <p>{posted_date}</p>
              </div>
              
              </div>
              <div>
                <span>{reading_time}Min Read</span>
                <button onClick={() => {handleAddToBookmark(blog)}} className=' ml-2 text-red-600 text-2xl '><FaBookmark /></button>
            </div>
            </div>
            
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                 hashtags.map((hashtag, idx)=> <span key={idx}> <a href=''>#{hashtag}</a></span>)
                }
            </p>
            <button onClick={()=>{handleMarkAsRead(reading_time)}} className='text-blue-600 underline '>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired
}
export default Blog;