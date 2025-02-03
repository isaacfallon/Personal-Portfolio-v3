import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <>
            <div className="text-center m-auto">
                <h1 className="text-7xl font-bold text-slate-800 pt-6">Hi, I&apos;m <span className="text-sky-700">Isaac Fallon.</span></h1>
                <h2 className="text-3xl py-8">Digital Communications Specialist & Developer.</h2>
                <p className="m-auto w-2/7 text-lg">I&apos;ve spent the last six years crafting engaging experiences and maintaining digital platforms for some of the biggest companies in Australia.</p>
            </div>
            <div className="flex justify-between w-1/10 m-auto py-6">
                <p className="text-lg bg-orange-100 p-2">resume</p>
                <a className="text-4xl pt-1" href="https://github.com/isaacfallon" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="text-4xl pt-1" href="https://www.linkedin.com/in/isaacfallon/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </>
    )
}

export default About;

