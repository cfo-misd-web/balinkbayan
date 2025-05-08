import React, { useEffect } from 'react';

const CurrencyConverter: React.FC = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.src = 'https://www.cashbackforex.com/Content/remote/remote-widgets.js';
        script1.onload = () => {
            const script2 = document.createElement('script');
            script2.type = 'text/javascript';
            script2.innerHTML = `
                RemoteCalc({
                    "Url": "https://www.cashbackforex.com",
                    "TopPaneStyle": "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxYmExYzQgMjAlLCAjNDliOWFkIDQ1JSk7IGJvcmRlcjogc29saWQgMHB4OyBib3JkZXItYm90dG9tOiBub25lOyBjb2xvcjogd2hpdGU7",
                    "BottomPaneStyle": "YmFja2dyb3VuZDogd2hpdGU7IGJvcmRlcjogc29saWQgMXB4ICM3YTdhN2E7IGJvcmRlci10b3A6IG5vbmU7IGNvbG9yOiBibGFjazs=",
                    "ButtonStyle": "YmFja2dyb3VuZDogIzFiYTFjNDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==",
                    "TitleStyle": "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==",
                    "TextboxStyle": "YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYQ==",
                    "ContainerWidth": "665",
                    "HighlightColor": "#ffff00",
                    "IsDisplayTitle": false,
                    "IsShowEmbedButton": true,
                    "CompactType": "large",
                    "DefaultCurrencyFrom": "PHP",
                    "DefaultCurrencyTo": "USD",
                    "Calculator": "currency-converter",
                    "ContainerId": "currency-converter-163324"
                });
            `;
            document.getElementById('currency-converter-163324')?.appendChild(script2);
        };
        document.getElementById('currency-converter-163324')?.appendChild(script1);
    }, []);

    return <div id="currency-converter-163324"></div>;
};

export default CurrencyConverter;