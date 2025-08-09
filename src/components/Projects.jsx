import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

let iconHoverStyle = "text-2xl pt-1 hover:text-sky-700 relative after:content-[''] after:absolute after:h-[3px] after:left-0 after:bottom-0 after:w-0 after:bg-sky-700 after:transition-width after:duration-500 hover:after:w-full";

function Projects() {
    return (
        <>
            <div className="text-center pt-4" id="projects">
                <h2 className="text-4xl font-bold">PROJECTS</h2>
                <div className="flex justify-center gap-4 py-4">
                    <div className="h-75 w-75 bg-red-200 flex-initial hover:-translate-y-1 hover:scale-105 ease-in-out transition delay-100 duration-200 cursor-pointer">

                        <h3>Project 1</h3>
                        <p>Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam</p>
                        <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </ul>
                        <a className={iconHoverStyle} href="https://github.com/isaacfallon" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a className={iconHoverStyle} href="https://www.linkedin.com/in/isaacfallon/" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                                            
                                        </a>

                    </div>
                    <div className="h-75 w-75 bg-sky-200 flex-initial hover:-translate-y-1 hover:scale-105 ease-in-out transition delay-100 duration-200 cursor-pointer"></div>
                    <div className="h-75 w-75 bg-green-200 flex-initial hover:-translate-y-1 hover:scale-105 ease-in-out transition delay-100 duration-200 cursor-pointer"></div>
                </div>
            </div>
        </>
    )
}

export default Projects;