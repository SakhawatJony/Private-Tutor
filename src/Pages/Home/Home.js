import React from 'react';
import { Link } from 'react-router-dom';
import BannerBg from '../../image/banner.webp'
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6">
                         <img class='img-fluid' src={BannerBg} alt="" />
                    </div>
                    <div class="col-12 col-md-6 ">
                       <div class='pt-3'>
                       <h2 class='fw-bold'>Personal <span class='fw-bold' style={{color:'#990000'}}>Private Tutor</span> </h2>
                        <p style={{color:'#9e7b7b'}} class=''>We are providing home tutors to the students who are seeking extra help for betterment in their studies. All our private tutors are from BUET, DMC, IBA, DU, NSU, MIST, BRAC etc universities along with both English medium and Bangla medium background from reputed schools and colleges. Our adroit and dedicated house tutors are working very hard and honestly to boost up the grade of the engaged students.</p>

                      <Link to='/about'> <button style={{background:'#990000'}} type="button" class="btn btn-md text-white fw-bold">Leran More</button> </Link> 
                       </div>

                    </div>
                </div>
            </div>
            <Services></Services>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;