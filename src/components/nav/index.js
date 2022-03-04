import React from "react";
import resume from '../../assets/resume/aoz_2021_cv.pdf';

function Nav ({currentPage, handlePageChange}) {

    return(
        <header className=" navbar-main flex-column sticky-top">
            <nav className="' media-nav d-flex align-items-center justify-content-between m-5 mb-0 pb-3 flex-wrap'">
            {/* <h1 className= "nav-link text-light change"><a href="index.html">Alvaro Ormeno</a></h1> */}
            <a onClick={() => handlePageChange('Home')} className= "h2 nav-link text-light change ">Alvaro Ormeno</a>
                <ul className="nav-list nav justify-content-end">
                    <li className="mx-2">
                        <a onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' , "nav-link change"}
                            href="#About" data-aos="fade-down" data-aos-duration="1500">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' , "nav-link change"}
                            href="#Portfolio" data-aos="fade-down" data-aos-duration="1500">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' , "nav-link change"}
                            href="#Portfolio" data-aos="fade-down" data-aos-duration="1500">
                            Contact Me
                        </a>
                    </li>
                    <li className="mx-2">
                    <li className="nav-item" data-aos="fade-down" data-aos-duration="1500">
                        <a className="nav-link change" rel="noreferrer" href={resume} target="_blank" rel="noreferrer noopener">Resume</a>
                    </li>
                    </li>
                </ul>
            </nav>
        </header>
    )


}

export default Nav;