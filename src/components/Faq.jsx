import BackgroundSection from "./BackgroundSection"
import faq from '/src/content/faq/faq.json'

function Faq() {
    return (
        <>
            <BackgroundSection height='auto'>
                <div
                    className="relative w-4/5 lg:w-2/5 bg-white !px-6 !pt-10 !pb-8 !mt-72 !mb-32 sm:mx-auto rounded-lg">
                    <div className="!mx-2 !px-5">
                        <div className="flex flex-col items-center">
                            <h2 className="!mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                                {faq.faq_header}
                            </h2>
                        </div>
                        {faq.faqs?.map((item) => (
                            <div className=" grid max-w-xl divide-y divide-neutral-200">
                                <div class="!py-5">
                                    <details class="group">
                                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                            <span>{item?.faq_question}</span>
                                            <span class="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                                            {item?.faq_answer}
                                        </p>
                                    </details>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </BackgroundSection>

        </>
    )
}

export default Faq