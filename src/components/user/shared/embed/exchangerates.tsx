import React, { useEffect } from 'react';

const ExchangeRates: React.FC = () => {
    useEffect(() => {
        const reloadWidget = () => {
            const existingScript = document.getElementById('scFKZz1x2n8');
            if (existingScript) {
                existingScript.parentNode?.removeChild(existingScript);
            }

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.charset = 'UTF-8';
            script.async = true;
            script.id = 'scFKZz1x2n8';
            script.src = 'https://freecurrencyrates.com/en/widget-table?iso=PHP-USD-EUR-GBP-RUB-JPY-AUD-CNY-CNY&df=2&p=FKZz1x2n8&v=fi&source=fcr&width=600&width_title=0&firstrowvalue=1&thm=A6C9E2,FCFDFD,4297D7,5C9CCC,FFFFFF,C5DBEC,FCFDFD,2E6E9E,000000&title=Currency%20Converter&tzo=-480';

            const container = document.getElementById('gcw_mainFKZz1x2n8');
            container?.parentNode?.insertBefore(script, container);
        };

        reloadWidget();
    }, []);

    return (
        <div>
            <div id='gcw_mainFKZz1x2n8' className='gcw_mainFKZz1x2n8'></div>
            <a id='gcw_siteFKZz1x2n8' href='https://freecurrencyrates.com/en/'>FreeCurrencyRates.com</a>
        </div>
    );
};

export default ExchangeRates;