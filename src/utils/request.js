import { verifyDataPost } from './format.js';
import Toast from '../components/Toast/index.jsx';
import { MESSAGE_ERROR, MESSAGE_SUCCESS } from '../constants/message.js';
import { TOAST_STATUS } from '../components/Toast/toast-message.js';
import PropTypes from 'prop-types';
import { Methods } from './method.js';

export const Request = async ({
                           method,
                           data,
                           url,
                           onRequest = () => {
                           },
                           onSuccess = () => {
                           },
                           onFailed = () => {
                           },
                           onFinally = () => {
                           },
                           textSuccess = ''
                       }) => {
    onRequest(textSuccess)

    try {
        const response = await Methods[method](
            url,
            method === 'delete' || method === 'postFile' ? data : verifyDataPost(data)
        )

        onSuccess(response)

        textSuccess && Toast(MESSAGE_SUCCESS[textSuccess] || 'Success', TOAST_STATUS.success)

        return response
    } catch (error) {
        console.log(error)
        if (error.code === '401') {
            localStorage.clear()
            window.location.href = '/login'
        }
        onFailed(error.response.data)
        Toast(MESSAGE_ERROR[error.code] ||error.code, TOAST_STATUS.error)
        throw new Error(error.response.data.message || 'Unknown error occurred')
    } finally {
        onFinally()
    }
}

Request.prototype = {
    method: PropTypes.oneOf(['get', 'post', 'put', 'delete', 'postFile']).isRequired,
    url: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(FormData)]),
    onRequest: PropTypes.func,
    onSuccess: PropTypes.func,
    onFailed: PropTypes.func,
    onFinally: PropTypes.func,
    textSuccess: PropTypes.func,

}
