import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

let iconHoverStyle = "text-4xl pt-1 hover:text-sky-700 relative after:content-[''] after:absolute after:h-[3px] after:left-0 after:bottom-0 after:w-0 after:bg-sky-700 after:transition-width after:duration-500 hover:after:w-full";

function About() {
    return (
        <>
            <div className="text-center m-auto">
                <h1 className="text-7xl font-bold text-slate-800 pt-6">Hi, I&apos;m <span className="text-sky-700">Isaac Fallon.</span></h1>
                <h2 className="text-3xl py-8">Digital Communications Specialist & Developer.</h2>
                <p className="m-auto w-2/7 text-lg">I&apos;ve spent the last six years crafting engaging experiences and maintaining digital platforms for some of the biggest companies in Australia.</p>
            </div>
            <header className="flex justify-center w-1/2 m-auto">
            <div className="flex justify-around py-6 gap-8">
                {/* <p className="text-lg bg-orange-100 p-2">resume</p> */}
                <a className={iconHoverStyle} href="https://github.com/isaacfallon" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className={iconHoverStyle} href="https://www.linkedin.com/in/isaacfallon/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            </header>
        </>
    )
}

export default About;

