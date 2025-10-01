import CardComponent from "./CardComponent"
import products from '/src/content/products/products.json'

function ProductCards() {

    return (
        <>
            <div className='text-center !py-12'>
                <h1 className='text-3xl font-bold'>{products.product_page_header || 'Latest goods'}</h1>
            </div>
            <div className='w-full h-full flex items-center justify-start flex-col gap-2'>
                <div className='w-4/5 h-full grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-5 sm:gap-12 lg:gap-4 !mt-5'>
                    <CardComponent />
                </div>
            </div>
        </>
    )
}

export default ProductCards