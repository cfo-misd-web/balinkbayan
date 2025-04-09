import React from 'react';

interface ClienteleHeaderProps {
    title?: string;
    subtitle?: string;
}

const ClienteleHeader: React.FC<ClienteleHeaderProps> = ({
    title = "Our Clientele",
    subtitle = "The Commission on Filipinos Overseas serves various stakeholders in the Filipino diaspora"
}) => {
    return (
        <div className="w-full lg:w-[1400px] items-center justify-center mx-auto md:py-12">
            <div className="container mx-auto px-4">
                <div className="lg:grid grid-cols-3 *:text-start">
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-3">{title}</h2>
                    <p className="text-gray-600">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ClienteleHeader;