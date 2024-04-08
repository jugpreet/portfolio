
const TopNav = ({about,projects, contact})=>{
    const scrollToTop =(eleRef)=>[
        window.scrollTo({
            top : eleRef.current.offsetTop,
            behavior: "smooth"
        })
    ]
    return (
        <div>
            <ul className="flex list-none justify-between float-right lg:w-[50vh]">
                <li onClick = {()=>{scrollToTop(about)}}>
                    About
                </li>
                <li onClick = {()=>{scrollToTop(projects)}}>
                    Projects
                </li>
                <li onClick = {()=>{scrollToTop(contact)}}>
                    Contact
                </li>
                <li>
                    Resume
                </li>
            </ul>
        </div>
    )
}

export default TopNav;