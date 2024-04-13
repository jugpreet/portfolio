const skillsData = ["React", "Redux", "HTML", "CSS", "JavaScript ES6", "Git", "Performance Optimization", "Accessibility" ]
const Skills =()=>{
    return (
        <div className="p-5 lg:px-40 justify-center">
            <h3>Skills</h3>
       
            <div className="md:flex">
            {
                skillsData.map((data)=>(
                    <div className="border-2 p-2 m-2 text-center rounded-md shadow-2xl shadow-grey-500/50">{data}</div>
                ))
            }
            </div>
        </div>
    )
}

export default Skills