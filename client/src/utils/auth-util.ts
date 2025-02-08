export const setTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem(`accessToken`, accessToken);
    localStorage.setItem('refreshToken', refreshToken);
}

export const getTokens = () => {
    return {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
    };
};

export const clearTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
};

export const getUserRole = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return null;

    const payload = JSON.parse(atob(accessToken.split('.')[1]));
    return payload.role;
}