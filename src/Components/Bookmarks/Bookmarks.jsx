/* eslint-disable react/prop-types */

import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(bookmarks)
    return (
        <div className='md:w-1/3 bg-slate-400 ml-4 mt-6'>

         <div>
            <h3 className='text-xl text-center mb-4 bg-pink-300'>Reading Time:{readingTime}</h3>
         </div>

            <h2 className='text-3xl font-bold text-center'>Bookmarks:{bookmarks?.length}</h2>

          {
            bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          }

        </div>
    );
};

export default Bookmarks;