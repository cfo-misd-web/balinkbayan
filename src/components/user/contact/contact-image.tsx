
import useIsMobile from '@/lib/use-is-mobile';
import { cn } from '@/lib/utils';
import React from 'react';

interface ContactImageProps {
    src?: string;
    alt?: string;
    className?: string;
    children?: React.ReactNode;
}

const ContactImage: React.FC<ContactImageProps> = ({
    src = '/images/contact-default.jpg',
    alt = 'Contact Us',
    className,
    children
}) => {
    const isMobile = useIsMobile();


    return (
        <div className={cn(className, "relative w-full")}>
            <div className={cn("flex flex-col items-center justify-center w-full h-full", !isMobile && "-mb-100")}>
                {children}
            </div>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className='object-cover w-full h-[700px] max-lg:hidden'
            />
        </div>
    );
};

export default ContactImage;