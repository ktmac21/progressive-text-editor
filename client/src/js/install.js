const buttonInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    buttonInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
buttonInstall.addEventListener('click', async () => {
    console.log('install button clicked');
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    const result = await promptEvent.userChoice;
    console.log('userChoice', result)

    window.deferredPrompt = null;
    
    buttonInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled', event);

    window.deferredPrompt = null; 
});
