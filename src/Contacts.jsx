import { CiPhone, CiMail, } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
const Contacts = ()=>{

    const downloadResume =()=>{
        fetch("Jugpreet.pdf").then((res)=>{
            res.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Jugpreet-Resume.pdf";
                alink.click();
            });
        });
    }
    return <div className="p-5 lg:px-40 items-center text-white">
            <h3>Let's Get in touch</h3>
              <div className="md:flex md:items-center">
                 <div className="flex p-5 text-xl font-thin">
                    <span className="icon py-6"><CiMail /></span> 
                    <p className="p-5">E-Mail: jugpreet12345@gmail.com</p>
                </div>
                <div className="flex p-5 text-xl font-thin"><span className="icon py-1 pr-4">
                    <CiPhone /></span>Phone: 7894235013</div>
                <button className=" flex p-5 pointer-events-auto text-xl font-thin" onClick={downloadResume}>
                    <span className="icon py-1 pr-5"><GoDownload /></span>Download Resume</button>
                </div>
            </div> 
}
export default Contacts;