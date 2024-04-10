import TopNav from './TopNav'
const Header = ({about, projects})=>{
    return (
        <div className='flex justify-between align-center p-4 text-white'>
        <h1>Jugpreet</h1>
        <TopNav about = {about} projects= {projects}/>
        </div>
    )
}

export default Header;