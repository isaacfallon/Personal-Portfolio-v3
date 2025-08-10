function Skills() {
    const skillStyleFront = "bg-orange-100 p-2 hover:-translate-y-1 hover:scale-103 ease-in-out transition delay-100 duration-200 cursor-pointer";
    const skillStyleBack = "bg-green-100 p-2 hover:-translate-y-1 hover:scale-103 ease-in-out transition delay-100 duration-200 cursor-pointer";
    return (
        <>
            <div className="text-center pt-4 w-1/3 m-auto" id="skills">
                <h2 className="text-4xl font-bold">KEY SKILLS</h2>
                <ul className="flex justify-center gap-3 text-lg flex-wrap px-12 py-4">
                    <li className={skillStyleFront}>JavaScript</li>
                    <li className={skillStyleFront}>React</li>
                    <li className={skillStyleFront}>Tailwind CSS</li>
                    <li className={skillStyleFront}>Power Apps & Automate</li>
                    <li className={skillStyleBack}>Node.js</li>
                    <li className={skillStyleBack}>Python</li>
                    <li className={skillStyleBack}>PostgreSQL</li>
                    <li className={skillStyleBack}>Git</li>
                </ul>
            </div>
        </>
    )
}

export default Skills;