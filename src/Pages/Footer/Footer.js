import React from 'react';

const Footer = () => {
    return (
        <div class='mt-5 h-100' style={{background:'#2E4053',height:''}}>

            <div class="container">
                <div class="row row-cols-1 row-cols-md-4 g-4 ">
                    <div class="col">
                        <ul class='list-unstyled text-white'>
                            <h5>Information</h5>
                            <li>About Me</li>
                            <li>Blog</li>
                            <li>Testimonial</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class='list-unstyled text-white'>
                            <h5>Helpful Links</h5>
                            <li>Services</li>
                            <li>Supports</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class='list-unstyled text-white'>
                            <h5>My Services</h5>
                            <li>Math</li>
                            <li>Physics</li>
                            <li>Chemistry</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class='list-unstyled text-white'>
                            <h5>Contact Me</h5>
                            <li>Address: Feni Bangladesh</li>
                            <li>Email: personaltutor@gmail.com</li>
                            <li>Phone: +88545265252</li>
                        </ul>
                    </div>

                </div>
                <div class='text-white text-center'>
                <hr />
                <p class='pb-3'>copyRight@personaltutor2022</p>
                </div>
            </div>

            
        </div>
    );
};

export default Footer;