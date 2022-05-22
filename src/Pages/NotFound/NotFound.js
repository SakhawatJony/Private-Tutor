import React from 'react';
import  NotFoundBg from '../../image/NotFound.jpg'

const NotFound = () => {
    return (
        <div class='mt-5'>
            <h3 class='text-red'>Sorry woring Page Please try Again</h3>
            <img src={NotFoundBg}  class="img-fluid" alt="" />
        </div>
    );
};

export default NotFound;