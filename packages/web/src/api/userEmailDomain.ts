import axiosInstance from "./config";

// 创建
export async function createEmail(data: any): Promise<any> {
    const response = await axiosInstance.post<any>('/api/userEmailDomain/create', data)
    return response.data
}

// 列表

export async function allEmail(data: any): Promise<any> {
    const response = await axiosInstance.get<any>('/api/userEmailDomain/list', data)
    return response.data
}

// 删除
export async function deleteEmail(data: any): Promise<any> {
    const response = await axiosInstance.post<any>('/api/userEmailDomain/delete', data)
    return response.data
}