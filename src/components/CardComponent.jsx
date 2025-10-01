import { useNavigate } from 'react-router'
import products from '/src/content/products/products.json'


function CardComponent() {
    const navigate = useNavigate()
    return (
        <>
            {products.product_list?.map((item, key) => (
                <div className="flex w-5/6 h-full flex-col items-center justify-center bg-white"
                    key={key}
                    onClick={() => navigate(`${location.pathname === '/catalog' ? `/catalog/product/${key}` : `product/${key}`}`, { state: products })}
                >
                    <a className='overflow-hidden cursor-pointer w-full flex items-center justify-center'>
                        <img
                            className="h-full aspect-[3/4] object-cover  hover:scale-105 transition-all duration-200"
                            src={item.product_images[0].product_images}
                            alt={`Garter Product Image `} />
                    </a>

                    {/* </div> */}
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
                                    : `text-gray-900 line-through `
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
        </>
    )
}

export default CardComponent