//统一管理接口
import request from '@/utils/request'

const api = {
    islogin: (data) => request.get('/api/user/info',data),

    userlogin: (data) => request.post('/api/login',data),

    TaskList: (data) => request.get('/api/task/list',data),

    overtimeDetail: (data) => request.get('/api/apply/overtime', data),

    vacationDetail: (data) => request.get('/api/apply/vacation', data)

}
export default api