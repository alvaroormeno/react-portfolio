import React, { useState } from 'react';

function Portfolio () {
    const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([
        {
            title: 'The Hype',
            description: "Your to go website to learn about the latest trends in the market!",
            link: 'https://immense-springs-30161.herokuapp.com/',
            repo: 'https://github.com/gallolopez1/proj-02-TheHype',
            resource: 'HTML, Bulma (CSS), Javascript,',
            image: require('../../assets/images/the_hype.png')
        },
        {
            title: 'Flight for Tonight',
            description: "A quick and easy to use app that lets you search for flights based on your travel budget",
            link: 'https://mloercher.github.io/flight-for-tonight/index.html',
            repo: 'https://github.com/gallolopez1/flight-for-tonight',
            resource: 'HTML, CSS, Javascript,',
            image: require('../../assets/images/flight_for_tonight.png')
        },
        {
            title: 'Run Buddy',
            description: " A website that offers fitness training services.",
            link: 'https://alvaroormeno.github.io/run-buddy/',
            repo: 'https://github.com/alvaroormeno/run-buddy',
            resource: 'HTML, CSS',
            image: require('../../assets/images/run_buddy.jpeg')
        },
    ])
    
    
    return (
        <section className='mt-5 mb-5' style={{ height: '100vh' }} data-aos="fade-up" data-aos-duration="1600">
            <div className='text-center' >
                <h1 data-testid="h1tag" data-aos="fade-right" data-aos-duration="1500">Portfolio</h1>
            </div>
            <br />
            <div className="row justify-content-center portfolio" >
                {projects.map((project) => (
                    <div className='col-12 col-md-6 col-lg-3 m-2'>
                        <div className="card m-2 h-100" key={project.name}>
                            <img src={project.image} className="image-card card-img-top" alt={project.name}></img>
                            <div className="card-body">
                                <h5 className="card-title fw-light text-dark">{project.name}</h5>
                                <p className="card-text text-dark">{project.description}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <a href={project.url} target="_blank" className="btn btn-primary m-2 btn-dark change2">View the project</a>
                                {/* {project.repoUrl ? <SocialMediaIconsReact borderColor="rgba(0,0,0,0.53)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(13,13,13,0.96)" backgroundColor="rgba(0,0,0,0)" iconSize="3" roundness="20%" url={project.repoUrl} size="54" /> : ""} */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}



export default Portfolio;