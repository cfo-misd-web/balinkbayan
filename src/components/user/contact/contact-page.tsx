import ContactHead from "./contact-head"
import ContactImage from "./contact-image"
import ContactMap from "./contact-map"
import ContactSectionOne from "./contact-section-one"

export default function ContactPage() {
    return (
        <div>
            <ContactHead />
            <div className="w-[1400px] flex-col max-lg:w-full flex items-center justify-center mx-auto mt-10">
                <ContactSectionOne />
            </div>
            <ContactImage src="/img-assets/img-2.jpg" className="w-full">
                <div className="w-[1400px] flex-col max-lg:w-full flex items-center justify-center mx-auto mt-10">
                    <ContactMap />
                </div>
            </ContactImage>
        </div>
    )
}