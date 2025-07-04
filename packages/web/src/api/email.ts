import axiosInstance from "./config";

// 查询所有邮箱
export async function getAllMail(data: any): Promise<any> {
    const response = await axiosInstance.get<any>('/api/mail/all_mail', {
        params:data
    })
    return response.data
}

