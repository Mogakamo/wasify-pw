//service workers
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker
        .register(‘/s)
            .then(function (reg) {
                console.log(‘Service worker registered‘);
            })
            .catch(function (e) {
                console.error(‘Error during worker registration: ’, e);
            });
        }