function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

function registerServiceWorker() {
  return navigator.serviceWorker.register("/sw.js");
}


/**
 * returns the subscription if present or nothing
 */
 function getUserSubscription() {
  //wait for service worker installation to be ready, and then
   return registerServiceWorker().then(async function(){
        let deferredPrompt;
        const addBtn = document.querySelector('.add-button');
        const addD = document.querySelector('.install-dialog')
        const cancel = document.querySelector('.cancel')

        addBtn.style.display = 'none';
        
        window.addEventListener('beforeinstallprompt', (e) => {
        
          e.preventDefault();
          // Stash the event so it can be triggered later.
          deferredPrompt = e;
          // Update UI to notify the user they can add to home screen
          addBtn.style.display = 'block';
          addD.style.display = 'block';
          cancel.addEventListener('click',(e)=>{
            e.preventDefault();
            addD.style.display = 'none';
          })
          addBtn.addEventListener('click', (e) => {
            // hide our user interface that shows our A2HS button
            addBtn.style.display = 'none';
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                  console.log('User accepted the A2HS prompt');
                } else {
                  console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
              });
          });
        });
      
    })
   
  }
  


export {
  isPushNotificationSupported,
  registerServiceWorker,
  getUserSubscription
};