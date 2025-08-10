import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

let iconHoverStyle = "text-2xl pt-1 hover:text-sky-700 relative after:content-[''] after:absolute after:h-[3px] after:left-0 after:bottom-0 after:w-0 after:bg-sky-700 after:transition-width after:duration-500 hover:after:w-full";

function Projects() {
    return (
        <>
            <div className="text-center pt-4" id="projects">
                <h2 className="text-4xl font-bold">PROJECTS</h2>
                <div className="flex justify-center gap-4 py-4">

                    <div className="h-75 w-75 flex-initial hover:-translate-y-2 ease-in-out transition delay-100 duration-200 cursor-pointer p-6 rounded-md shadow-md bg-slate-200">

                        <h3 className="text-2xl font-bold">Keyboard Warriors</h3>
                        <p className="pt-2">Challenge and improve your typing skills by getting data-driven insights you can save to your own profile.</p>
                        <ul className="flex justify-center gap-2 text-sm flex-wrap py-4">
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            <li>MongoDB</li>
                            <li>GraphQL API</li>
                        </ul>
                        <div className="flex justify-center gap-6">
                        <a className={iconHoverStyle} href="https://github.com/isaacfallon/Project-3-Keyboard-Warriors" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a className={iconHoverStyle} href="https://keyboardwarriors.site/" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                                            
                                        </a>
                                        </div>

                    </div>

                        <div className="h-75 w-75 flex-initial hover:-translate-y-2 ease-in-out transition delay-100 duration-200 cursor-pointer p-6 rounded-md shadow-md bg-slate-200">

                        <h3 className="text-2xl font-bold">SQL Employee DB</h3>
                        <p className="pt-2">Store and update useful employee data in this user-friendly SQL employee tracker.</p>
                        <ul className="flex justify-center gap-2 text-sm flex-wrap py-4">
                            <li>PostgreSQL</li>
                            <li>Node.js</li>
                            <li>Inquirer</li>
                        </ul>
                        <div className="flex justify-center gap-6">
                        <a className={iconHoverStyle} href="https://github.com/isaacfallon/12-Challenge-SQL-Employee-Tracker" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a className={iconHoverStyle} href="https://drive.google.com/file/d/1B18A_t_GiyjzOOwG9Y9XMUJJuH0E3UwJ/view" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                                            
                                        </a>
                                        </div>

                    </div>

                        <div className="h-75 w-75 flex-initial hover:-translate-y-2 ease-in-out transition delay-100 duration-200 cursor-pointer p-6 rounded-md shadow-md bg-slate-200">

                        <h3 className="text-2xl font-bold">Kanban Task Board</h3>
                        <p className="pt-2">Stay organized and on schedule with this color-coded, deadline-focused kanban board tracker.</p>
                        <ul className="flex justify-center gap-2 text-sm flex-wrap py-4">
                            <li>JavaScript ES6+</li>
                            <li>Bootstrap</li>
                            <li>jQuery</li>
                            <li>Day.js</li>
                        </ul>
                        <div className="flex justify-center gap-6">
                        <a className={iconHoverStyle} href="https://github.com/isaacfallon/Kanban-Task-Board/" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a className={iconHoverStyle} href="https://isaacfallon.github.io/Kanban-Task-Board/" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                                            
                                        </a>
                                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;