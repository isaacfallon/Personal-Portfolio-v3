function Skills() {
    const skillStyleFront = "bg-orange-100 p-2";
    const skillStyleBack = "bg-green-100 p-2";
    return (
        <>
            <div className="text-center pt-4 w-1/4 m-auto">
                <h2 className="text-4xl font-bold">SKILLS</h2>
                <ul className="flex justify-center gap-3 text-lg flex-wrap px-12 py-4">
                    <li className={skillStyleFront}>HTML</li>
                    <li className={skillStyleFront}>CSS</li>
                    <li className={skillStyleFront}>JavaScript</li>
                    <li className={skillStyleFront}>React</li>
                    <li className={skillStyleFront}>Tailwind CSS</li>
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