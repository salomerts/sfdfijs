import BackgroundSection from "./BackgroundSection"
import contact from '/src/content/contact/contact.json'
import React from "react";
function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c03785ad-92dc-4f7b-adf7-370b23b52099");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error");
            setResult(data.message);
        }
    };

    return (
        <>
            <BackgroundSection>
                <div className="relative w-4/5 lg:w-2/5 bg-white !px-6 !pt-10 !pb-8 !mt-72 !mb-32 sm:mx-auto rounded-lg">
                    <div className="!mx-auto w-full max-w-lg">
                        <h1 className="text-4xl font-medium">{contact.contact_page_header}</h1>
                        <p className="!mt-3 !mb-12">{contact.contact_page_description}</p>

                        <form className="!mt-10" onSubmit={onSubmit}>
                            <input type="hidden" name="form_id" value="contact_form" />
                            <div className="flex flex-col gap-6 w-full">
                                <div className='flex flex-col md:flex-row w-full gap-6'>
                                    <div className="relative z-0 w-full">
                                        <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent !py-2.5 !px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">{contact.name_placeholder}</label>
                                    </div>
                                    <div className="relative z-0 w-full">
                                        <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent !py-2.5 !px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">{contact.email_placeholder}</label>
                                    </div>
                                </div>
                                <div className="relative z-0 col-span-2">
                                    <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent !py-2.5 !px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">{contact.message_placeholder}</label>
                                </div>
                            </div>
                            <button type="submit" className="!mt-5 rounded-md bg-black !px-10 !py-2 text-white">{contact.button_text}</button>
                        </form>

                        <span>{result}</span>
                    </div>
                </div>
            </BackgroundSection>
        </>
    )
}

export default Contact