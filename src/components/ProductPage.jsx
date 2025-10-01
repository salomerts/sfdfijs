import { useLocation, useNavigate, useParams } from "react-router"
import BackgroundSection from "./BackgroundSection"
import { useEffect, useState } from "react"

function ProductPage() {

    const { id } = useParams()
    const location = useLocation()
    const product_data = location?.state
    const [hovered, setHovered] = useState('')

    useEffect(() => {
        window.scroll(0, 0)
    }, [])


    return (
        <>
            <BackgroundSection height="auto">
                <div className="w-3/4 relative flex flex-col lg:flex-row bg-white gap-6 lg:gap-12 !px-6 !pt-10 !pb-8 !mt-42 !mb-32 rounded-xl justify-evenly">
                    {/* image */}
                    <div className='flex flex-col justify-center items-center gap-12'>
                        <div className='h-full lg:min-h-[800px] w-full lg:w-[500px] items-center flex justify-center'>
                            <img
                                className='object-cover w-full h-full aspect-[2/3] '
                                src={hovered || product_data?.product_list[id].product_present_image}
                            />
                        </div>
                        <div className="flex flex-row gap-12 w-full h-32 items-center justify-center">
                            <div className="h-32 w-32 flex items-center justify-center overflow-hidden">
                                <img
                                    src={product_data?.product_list[id].product_present_image}
                                    onMouseOver={(e) => setHovered(e.currentTarget.src)}
                                />
                            </div>
                            {product_data?.product_list[id].product_images.map((item, index) => (
                                <div
                                    key={index}
                                    className="h-32 w-32 flex items-center justify-center overflow-hidden"
                                >
                                    <img
                                        src={item.product_images}
                                        alt={`Garter Product Image ${index}`}
                                        className="object-contain h-full w-full"
                                        onMouseOver={(e) => setHovered(e.currentTarget.src)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex items-start flex-col justify-center w-full gap-6 lg:w-1/2'>
                        {/* name */}
                        <div>
                            <h1 className='text-4xl font-bold mb-2'>
                                {product_data?.product_list[id]?.product_name}
                            </h1>
                        </div>
                        {/* sizes */}
                        <div>
                            <ul className='flex gap-6 flex-wrap'>
                                {product_data?.product_list[id]?.product_sizes?.map((item, key) => (
                                    <li className='w-12 h-12 text-center flex items-center justify-center rounded-full bg-gray-400/50 text-xl' key={key}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        {/* avaialability */}
                        <div>
                            <h2 className={`
                                font-bold
                                text-center
                                ${product_data?.product_list[id]?.product_available
                                    ? `text-green-800 `
                                    : `text-gray-900 line-through`
                                }
                            }`}>
                                {product_data?.product_list[id]?.product_available ? 'in stock' : 'in stock'}
                            </h2>
                        </div>
                        {/* price */}
                        <div>
                            <p className='text-4xl cursor-pointer hover:underline'>
                                {product_data?.product_list[id]?.product_price}
                            </p>
                        </div>
                        {/* message button */}
                        <div>
                            <button className='bg-blue-500 text-2xl font-bold text-white rounded-xl !py-2 !px-2 outline-none'>
                                <a href={product_data?.inbox_link} target="_blank">
                                    {product_data?.message_text}
                                </a>
                            </button>
                        </div>
                    </div>

                </div>
            </BackgroundSection>
        </>
    )
}

export default ProductPage