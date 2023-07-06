import axiosInstance from './axiosInstance.js';

export const Methods = {
    get: (url) => axiosInstance.get(url),
    post: (url, data) => axiosInstance.post(url, data),
    put: (url, data) => axiosInstance.put(url, data),
    delete: (url, data) => axiosInstance.delete(url, { data }),
    postFile: (url, file) => {
        const formData = new FormData();
        formData.append('file', file)
        return axiosInstance.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
