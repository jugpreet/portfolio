const FirstIntro = () => {
  return (
    <div className="lg:h-[70vh] p-5 lg:px-40 flex items-center">
      <div>
        <div className="text-xl lg:text-7xl mb-10 font-bold">
          <p>Hi,</p>
          <p>I am Jugpreet Kaur</p>
          <p>Software Engineer</p>
        </div>
        <p className="lg:text-5xl font-thin"> I am proficient in JavaScript, React.js</p>
      </div>
      <div className='flex-1 bg-[url("./assets/mypic.jpeg")]'></div>
    </div>
  );
};

export default FirstIntro;
