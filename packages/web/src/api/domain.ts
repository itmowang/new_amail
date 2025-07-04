import axiosInstance from "./config";

// 登录
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function allDomain(data: any): Promise<any> {
    const response = await axiosInstance.get<any>('/api/domain/list', data)
    return response.data
}

