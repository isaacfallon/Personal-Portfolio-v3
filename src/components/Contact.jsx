function Contact() {
    return(
        <>
            <div className="text-center pt-4 w-1/3 m-auto" id="contact">
                <h2 className="text-4xl font-bold">CONTACT</h2>
                 <ul className="flex justify-center gap-3 text-lg flex-wrap px-12 py-4">
                    <a href="mailto:isaac.falyn@gmail.com"><li className="border-2 border-solid border-sky-700 p-2 hover:-translate-y-1 hover:scale-105 ease-in-out transition delay-100 duration-200 cursor-pointer">email me</li></a>
                </ul>
            </div>
        </>
    )
}

export default Contact;