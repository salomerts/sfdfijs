import CardComponent from "./CardComponent"
import BackgroundSection from "./BackgroundSection"

function Catalog() {
    return (
        <>
            <BackgroundSection height='auto'>
                <div className='relative w-4/5 h-full grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-5 sm:gap-12 lg:gap-4 !mt-62 lg:!mt-72 !mb-12 lg:!mb-32'>
                    <CardComponent />
                </div>
            </BackgroundSection>
        </>
    )
}

export default Catalog