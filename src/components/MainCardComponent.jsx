import { useNavigate } from 'react-router'
import main from '/src/content/main/main.json'

// console.log(main.main_page_products.product_list)

function MainCardComponent() {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <div className='text-center !py-12'>
                    <h1 className='text-3xl font-bold'>
                        {main.main_page_products.product_page_header || 'Latest goods'}
                    </h1>
                </div>
                <div className='w-full h-full flex items-center justify-start flex-col gap-2'>
                    <div className='w-4/5 h-full grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-5 sm:gap-12 lg:gap-4 !mt-5'>
                        {main.main_page_products.product_list?.map((item, key) => (
                            <div className="flex w-5/6 h-full flex-col items-center justify-center bg-white"
                                key={key}
                                onClick={() => navigate(`product/${key}`, { state: main.main_page_products })}
                            >
                                <a className='overflow-hidden cursor-pointer w-full flex items-center justify-center'>
                                    <img
                                        className="h-full aspect-[3/4] object-cover  hover:scale-105 transition-all duration-200"
                                        src={item.product_images[0].product_images}
                                        alt={`Garter Product Image `} />
                                </a>

                                <div className="mt-4 pb-5">
                                    <a>
                                        <h5 className="text-center tracking-tight text-gray-500">{item.product_name}</h5>
                                    </a>
                                    <div>
                                        <p className={`
                                                    text-sm font-bold
                                                    text-center
                                                    ${item.product_available
                                                ? `text-green-800 `
                                                : `text-gray-900 line-through`
                                            }
                                                    
                                                    `}>
                                            {item.product_available ? 'in stock' : 'in stock'}
                                        </p>
                                    </div>
                                    <div className=" flex justify-center">
                                        <p>
                                            <span className="text-sm font-bold text-gray-900">{item.product_price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default MainCardComponent