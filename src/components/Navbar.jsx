import { Link } from "react-router"
import { Menu, X } from "lucide-react"
import { useState } from "react"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="flex flex-row items-center justify-center gap-4 z-11 text-xl w-4/5 rounded-xl absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ul className="flex flex-row items-center justify-between w-full bg-gray-300/10 text-white rounded-2xl">
                    <div className="xl:flex hidden flex-row items-center justify-between w-full bg-gray-300/10 text-white rounded-2xl ">
                        <Link to={'/'} className="font-bold !py-5 !w-full text-center border-r-2 hover:bg-white/50 transition-all duration-95 cursor-pointer">
                            <li>
                                მთავარი
                            </li>
                        </Link>
                        <Link to={"/catalog"} className="font-bold !py-5 !w-full text-center border-r-2  hover:bg-white/50 transition-all duration-95 cursor-pointer">
                            <li>
                                კატალოგი
                            </li>
                        </Link>
                        <Link to={"/about"} className="font-bold !py-5 !w-full text-center border-r-2  hover:bg-white/50 transition-all duration-95 cursor-pointer">
                            <li>
                                ჩვენ შესახებ
                            </li>
                        </Link>
                        <Link to={"/contact"} className="font-bold !py-5 !w-full text-center border-r-2  hover:bg-white/50 transition-all duration-95 cursor-pointer">
                            <li>
                                კონტაქტი
                            </li>
                        </Link>
                        <Link to={"/faq"} className="font-bold !py-5 !w-full text-center border-r-2 hover:bg-white/50 transition-all duration-95 cursor-pointer">
                            <li>
                                FAQ
                            </li>
                        </Link>
                        <Link to={"/wishlist"} className="font-bold !py-5 !w-full text-center  hover:bg-white/50 transition-all duration-95 cursor-pointer">
                            <li>
                                სურვილების სია
                            </li>
                        </Link>

                    </div>
                    <div className="flex xl:hidden w-full items-center justify-evenly gap-32 sm:justify-evenly sm:gap-32 md:gap-96 !py-6">
                        <Link to={'/'}>
                            <h1 className="text-2xl xl:text-3xl">Garter</h1>
                        </Link>
                        <Menu
                            onClick={() => setIsOpen(!isOpen)}
                            color="#ffffff"
                            width="24px"
                            height="24px"
                            className="cursor-pointer"
                        />

                    </div>
                    <div
                        className={`
                            absolute top-24 w-full 
                            bg-white text-black rounded-2xl
                            flex flex-col items-center justify-center gap-2
                            
                            text-center
                            origin-top overflow-hidden
                            transition-all duration-300 ease-in-out
                            ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
                        `}>
                        <Link to={'/'}
                            className='border-b-2 w-full !py-6'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <li>
                                მთავარი
                            </li>
                        </Link>
                        <Link to={"/catalog"}
                            className='border-b-2 w-full !py-6'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <li>
                                კატალოგი
                            </li>
                        </Link>
                        <Link to={"/about"}
                            className='border-b-2 w-full !py-6'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <li>
                                ჩვენ შესახებ
                            </li>
                        </Link>
                        <Link to={"/contact"}
                            className='border-b-2 w-full !py-6'
                            onClick={() => setIsOpen(!isOpen)}

                        >
                            <li>
                                კონტაქტი
                            </li>
                        </Link>
                        <Link to={"/faq"}
                            className='border-b-2 w-full !py-6'
                            onClick={() => setIsOpen(!isOpen)}

                        >
                            <li>
                                FAQ
                            </li>
                        </Link>
                        <Link to={"/wishlist"}
                            className=' w-full !py-6'
                            onClick={() => setIsOpen(!isOpen)}

                        >
                            <li>
                                სურვილების სია
                            </li>
                        </Link>
                    </div>
                </ul>
            </nav >
        </>
    )

}

export default Navbar