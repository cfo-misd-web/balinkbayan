import ContactHead from "./contact-head"
import ContactImage from "./contact-image"
import ContactMap from "./contact-map"
import ContactSectionOne from "./contact-section-one"

export default function ContactPage() {
    return (
        <>
            <ContactHead />
            <div className="max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto mt-20 mb-32 bg-light">
                <div className="w-[1400px] flex-col max-lg:w-full flex items-center justify-center mx-auto mt-10">
                    <ContactSectionOne />
                </div>
                <ContactImage src="/img-assets/img-2.jpg" className="w-full">
                    <div className="w-[1400px] flex-col max-lg:w-full flex items-center justify-center mx-auto mt-10">
                        <ContactMap />
                    </div>
                </ContactImage>
            </div>
        </>
    )
}