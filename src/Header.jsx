import TopNav from './TopNav'
const Header = ({about, projects, contact })=>{
    return (
        <div className='flex justify-between align-center p-4'>
        <h1>Jugpreet</h1>
        <TopNav about = {about} projects= {projects} contact={contact}/>
        </div>
    )
}

export default Header;