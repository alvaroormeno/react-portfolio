import React from "react";
import resume from '../../assets/resume/aoz_2021_cv.pdf';

function Nav ({currentPage, handlePageChange}) {

    return(
        <header className="flex-column sticky-top">
            <nav className="' media-nav d-flex align-items-center justify-content-between m-5 mb-0 pb-3 flex-wrap'">
            <a onClick={() => handlePageChange('Home')} style={{ textDecoration: "none", color: "var(--light-color)", fontSize: "larger", fontWeight: "bolder", fontFamily: "var(--main-font-family)" }} href="#Home">Alvaro Ormeno</a>
                <ul className="nav-list nav justify-content-end">
                    <li className="mx-2">
                        <a onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? "nav-link active text-success change" : "nav-link text-light change"}
                            href="#About">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? "nav-link active text-success change" : "nav-link text-light change"}
                            href="#Portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? "nav-link active text-success change" : "nav-link text-light change"}
                            href="#Portfolio">
                            Contact Me
                        </a>
                    </li>
                    <li className="mx-2">
                    <li className="nav-item" data-aos="fade-down" data-aos-duration="1500">
                        <a className="nav-link btn btn-outline-light text-light change" rel="noreferrer" href={resume} target="_blank" rel="noreferrer noopener">Resume</a>
                    </li>
                    </li>
                </ul>
            </nav>
        </header>
    )


}

export default Nav;