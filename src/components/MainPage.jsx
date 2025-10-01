
import BackgroundSection from "./BackgroundSection"
import ProductCards from "./ProductCards"
import MainCardComponent from "./MainCardComponent"
import main from '/src/content/main/main.json'

function MainPage() {
    return (
        <>
            <BackgroundSection>
                <div className="relative z-10 flex items-center justify-between h-full w-full text-white flex-col text-center">
                    <div className="w-full text-center collapse xl:visible">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white">{main.main_page_header}</h1>
                    </div>
                    <h1 className="text-3xl lg:text-[3rem] xl:text-[4rem] text-white">{main.main_page_text}</h1>
                    <div className="w-full ">
                        <ul className="flex w-full grow-1">
                            {main.main_page_products_list.map((item, key) => (
                                <li
                                    className="text-center text-white bg-black/70 font-thin w-full !py-2 md:!py-6 lg:!py-8 xl:!py-10 sm:text-xl lg:text-2xl xl:text-3xl hover:scale-95 transition-all cursor-pointer"
                                    key={key}>{item.main_page_product_list}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </BackgroundSection>
            {/* <ProductCards /> */}
            <MainCardComponent/>
        </>
    )
}

export default MainPage