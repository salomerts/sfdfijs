
import { Link } from "react-router"

function Footer() {

    return (
        <>
            <footer className='w-full !py-10 bg-black flex text-center text-white items-center justify-center '>
                <div className="flex flex-col">
                    <div>
                        <Link to={'/'}>
                            <h1 className='text-2xl !mb-6 lg:!mb-2'>Garter</h1>
                        </Link>
                    </div>

                    <ul className='flex flex-col md:flex-row items-center w-full !pb-12 justify-center gap-5'>
                        <div className='flex gap-6 md:flex-row flex-col'>

                            <Link to={'/'}
                            >
                                <li>
                                    მთავარი
                                </li>
                            </Link>
                            <Link to={"/catalog"}
                            >
                                <li>
                                    კატალოგი
                                </li>
                            </Link>
                            <Link to={"/about"}
                            >
                                <li>
                                    ჩვენ შესახებ
                                </li>
                            </Link>
                        </div>
                        <div className='flex gap-6 md:flex-row flex-col'>
                            <Link to={"/contact"}>
                                <li>
                                    კონტაქტი
                                </li>
                            </Link>
                            <Link to={"/faq"}
                            >
                                <li>
                                    FAQ
                                </li>
                            </Link>
                            <Link to={"/wishlist"}>
                                <li>
                                    სურვილების სია
                                </li>
                            </Link>
                        </div>
                    </ul>

                    <div>
                        <p className='text-[16px]'>All rights reserved. Garter 2025</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer