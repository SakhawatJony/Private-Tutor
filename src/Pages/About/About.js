import React from 'react';
import BannerBg from '../../image/banner.webp'

const About = () => {
    return (
        <div>
            <div class="container">
                <h4 class='pt-5 fw-bold' style={{color:'#2E4053'}}>About Us</h4>
                <div class="row align-items-center pt-3">
                    <div class="col-12 col-md-6">
                        <div class='pt-3'>
                       <h3 class='fw-bold'>Personal <span class='fw-bold' style={{color:'#990000'}}>Private Tutor</span> </h3>
                        <p style={{color:'#9e7b7b'}} class=''> We are providing home tutors to the students who are seeking extra help for betterment in their studies. All our private tutors are from BUET, DMC, IBA, DU, NSU, MIST, BRAC etc universities along with both English medium and Bangla medium background from reputed schools and colleges. Our adroit and dedicated house tutors are working very hard and honestly to boost up the grade of the engaged students.
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                          </p>
                       </div>

                    </div>
                    <div class="col-12 col-md-6">
                    <img class='img-fluid' src={BannerBg}  alt="" />
                   
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;