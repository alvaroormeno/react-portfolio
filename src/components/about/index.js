import React from "react";
import profile from "../../assets/images/alvaro_ormeno.jpeg"
import profile2 from "../../assets/images/alvaro_ormeno22.jpeg"

function About() {

    return (

        <section className=' about-me d-flex align-items-center justify-content-center flex-column'>
            <div className="section-title text-center mb-3">
                <h1>About Me</h1>
            </div>

            <div className="m-5">


            <img src={profile}  height="300"  alt="profile"/>
            



            </div>

            <div className="">



                <h3>
                    Hello! My name is Alvaro and im a front end developer in the making!
                </h3>
                <br />
                <h3>
                    Born in Miami raised in Lima and now living in the big apple! A photogrpahy and travel enthusiast who moved to NYC in 2014 to open an online peruvian bakery, worked as a trade analyst for the Peruvian government in NY and now in the middle of a career shift!
                </h3>





            </div>




        </section>



    )
}

export default About;