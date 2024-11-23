export const saveAccessToken = (accessToken: string):void => {
    localStorage.setItem('access_token', accessToken);
}
export const getAccessToken = () => {
    return localStorage.getItem('access_token');
};