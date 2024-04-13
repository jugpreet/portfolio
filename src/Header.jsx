import TopNav from './TopNav'
const Header = ({about, projects, skills})=>{
    const handleHome =()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div className='fixed w-full flex justify-between align-center p-4 text-white bg-slate-900'>
        <h1 onClick={handleHome}>Jugpreet</h1>
        <TopNav about = {about} projects= {projects} skills={skills}/>
        </div>
    )
}

export default Header;