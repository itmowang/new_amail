import axiosInstance from "./config";

// 登录
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handelLogin(data: any): Promise<any> {
    const response = await axiosInstance.post<any>('/api/user/login',  data)
    return response.data
}


// 注册
export async function registerUser(data: any): Promise<any> {
  const response = await axiosInstance.post<any>('/api/user/register',  data)
    return response.data
}