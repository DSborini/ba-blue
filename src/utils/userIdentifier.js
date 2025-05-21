const generateUserId = () => {
    const uniqueString = generateUserUniqueString();

    let hash = 0;
    for (let i = 0; i < uniqueString.length; i++) {
        const char = uniqueString.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return `user_${Math.abs(hash)}`;
};

const generateUserUniqueString = () => {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const language = window.navigator.language;
    const screenRes = `${window.screen.width}x${window.screen.height}`;
    const timeStamp = Date.now();
    
    return `${userAgent}-${platform}-${language}-${screenRes}-${timeStamp}`;
}

export const getUserId = () => {
    let userId = localStorage.getItem('userId');
    
    if (!userId) {
        userId = generateUserId();
        localStorage.setItem('userId', userId);
    }
    
    return userId;
};

export const getUserUniqueString = () => {
    let uniqueString = localStorage.getItem('userDeviceInfo');
    
    if (!uniqueString) {
        uniqueString = generateUserUniqueString();
        localStorage.setItem('userDeviceInfo', uniqueString);
    }
    
    return uniqueString;
};

export const clearUserId = () => {
    localStorage.removeItem('userId');
};

export const clearUserUniqueString = () => {
    localStorage.removeItem('uniqueString');
};