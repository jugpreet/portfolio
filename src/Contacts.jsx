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
    return <div className="lg:h-[100vh] p-5 lg:px-40 items-center">
            <h3>Get in touch</h3>
            <div className="flex w-9/12 text-xl font-thin"><p className="p-5">jugpreet12345@gmail.com</p>
            <span className="p-5">Phone: 7894235013</span>
            <button className="p-5 pointer-events-auto" onClick={downloadResume}>Download Resume</button></div>

        </div>
}
export default Contacts;