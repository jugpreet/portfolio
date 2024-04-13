
const TopNav = ({about,projects, skills})=>{
    const scrollToTop =(eleRef)=>[
        window.scrollTo({
            top : eleRef.current.offsetTop,
            behavior: "smooth"
        })
    ]
    return (
        <div>
            <ul className="flex list-none justify-between float-right lg:w-[50vh] text-white">
                <li className="m-2" onClick = {()=>{scrollToTop(about)}}>
                    About
                </li>
                <li className="m-2" onClick = {()=>{scrollToTop(skills)}}>
                    Skills
                </li>
                <li className="m-2" onClick = {()=>{scrollToTop(projects)}}>
                    Projects
                </li>
            </ul>
        </div>
    )
}

export default TopNav;