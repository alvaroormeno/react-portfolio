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
        {
            title: 'Work Day Schedule',
            description: "A calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
            link: 'https://alvaroormeno.github.io/work-day-scheduler/',
            repo: 'https://github.com/alvaroormeno/work-day-scheduler',
            resource: 'HTML, CSS, JQuery, API',
            image: require('../../assets/images/work_day.png')
        },
        {
            title: 'Git It Done',
            description: "A calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
            link: 'https://alvaroormeno.github.io/m6-git-it-done/',
            repo: 'https://github.com/alvaroormeno/m6-git-it-done',
            resource: 'HTML, CSS, JQuery, API',
            image: require('../../assets/images/git_it_done.png')
        },
        {
            title: 'Weather Dashboard',
            description: "A simple weather application that allows a user to search for a city and in return get today's weather and a 5 day weather forecast. Every searched city is saved as a button and the user can click it to look up again that same city.",
            link: 'https://alvaroormeno.github.io/weather-dashboard/',
            repo: 'https://github.com/alvaroormeno/weather-dashboard',
            resource: 'HTML, CSS, JQuery, API',
            image: require('../../assets/images/weather_dashboard.png')
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
                            <img src={project.image} className="image-card card-img-top " alt={project.name}></img>
                            <div className="card-body">
                                <h5 className="card-title fw-light text-dark">{project.name}</h5>
                                <p className="card-text text-dark">{project.description}</p>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <a href={project.link} target="_blank" className="btn btn-light m-2 change2">View Live Project</a>
                                <a href={project.repo} target="_blank" className="btn btn-light m-2 change2">View Repo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}



export default Portfolio;