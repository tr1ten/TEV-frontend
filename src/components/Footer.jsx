const Footer = () => {
    return (
        <footer
        className="
         w-full
            h-16
            flex
            flex-row
            justify-center
            items-center
            gap-2
            bg-gray-200
            border-t-2
            border-gray-400
            "
        >
           <h1 className='text-md'>
            Created with <span className='text-red-500'>❤</span> by <a href='https://github.com/tr1ten' className='text-blue-500 px-1'>Shubh</a>
            as Full Stack Developer Assignment
           </h1>
        </footer>
    );

}

export default Footer;