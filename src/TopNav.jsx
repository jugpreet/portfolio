
const TopNav = ({about,projects})=>{
    const scrollToTop =(eleRef)=>[
        window.scrollTo({
            top : eleRef.current.offsetTop,
            behavior: "smooth"
        })
    ]
    return (
        <div>
            <ul className="flex list-none justify-between float-right lg:w-[50vh] text-white">
                <li onClick = {()=>{scrollToTop(about)}}>
                    About
                </li>
                <li onClick = {()=>{scrollToTop(projects)}}>
                    Projects
                </li>
            </ul>
        </div>
    )
}

export default TopNav;