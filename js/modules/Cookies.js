export class Cookies {

    constructor() {
        this.checkCookieEnabled();
    }

    checkCookieEnabled() {
        // console.log(navigator.cookieEnabled);
        if(!navigator.cookieEnabled) { // '!navigator' to to samo co 'navigator.cookieEnabled === false'
            alert('Masz wyłączoną obsługę ciasteczek');
            return;
        }
    }

    setCookie(options) {
        //console.log(options);
        const cookiesSettingsTab = [];
        
        cookiesSettingsTab.push(`${options.name}=${options.value}`);
        
        if(typeof options.days === 'number') {
            const date = new Date();
           // console.log(date)
           date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000))
           cookiesSettingsTab.push(`expires=${date.toGMTString()}`);
        }

        document.cookie = cookiesSettingsTab.join(';');

        // console.log(cookiesSettingsTab.join(';'));
    }

    getCookie(name) {
    
        if(document.cookie !='') {
            const cookies = document.cookie.split(/; */);
            for(let i = 0; i < cookies.length; i++) {

                const cookieName = cookies[i].split('=')[0];
                const cookieValue = cookies[i].split('=')[1];

                if(cookieName === name) {
                    return cookieValue;
                }
            }
        }

    }

    removeCookie(name) {
        this.setCookie({
            name: name,
            days: -1
        

        })
    }

}