import { useState, useEffect, FormEvent, useCallback } from "react";
import { PlusCircle, Loader2, Trash2 } from "lucide-react";

// 确保所有 API 函数都已导入
import { allDomain } from '@/api/domain';
import { createEmail, allEmail, deleteEmail } from '@/api/userEmailDomain';

// 确保所有 shadcn/ui 组件都已导入
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

// --- 类型定义 ---
interface EmailAccount {
    id: string;
    fullEmail: string;
    createdAt: string;
}

interface Domain {
    id:string;
    name: string;
}

const Dashboard = () => {
    // --- 状态管理 ---
    const { toast } = useToast();
    const [emails, setEmails] = useState<EmailAccount[]>([]);
    const [openCreateDialog, setOpenCreateDialog] = useState(false);

    // 创建表单的状态
    const [newEmailName, setNewEmailName] = useState("");
    const [domainOptions, setDomainOptions] = useState<Domain[]>([]);
    const [selectedDomain, setSelectedDomain] = useState<string>();

    // 各种加载/UI状态
    const [isLoadingEmails, setIsLoadingEmails] = useState(true);
    const [isLoadingDomains, setIsLoadingDomains] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    // --- 数据获取 ---
    const fetchEmails = useCallback(async () => {
        setIsLoadingEmails(true);
        try {
            const response = await allEmail({}); // 假设API需要一个空对象
            if (response.code === 200 && response.data) {
                const formattedEmails = response.data.map((item: any) => ({
                    id: item.id,
                    fullEmail: item.fullEmail,
                    createdAt: new Date(item.createdAt).toLocaleDateString(),
                }));
                setEmails(formattedEmails);
            } else {
                 toast({
                    title: "列表加载失败",
                    description: response.msg || "无法获取邮箱列表。",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("加载邮箱列表失败:", error);
            toast({
                title: "错误",
                description: "无法连接到服务器。",
                variant: "destructive",
            });
        } finally {
            setIsLoadingEmails(false);
        }
    }, [toast]);

    useEffect(() => {
        const fetchDomains = async () => {
            setIsLoadingDomains(true);
            try {
                const response = await allDomain({});
                if (response.code === 200 && response.data) {
                    setDomainOptions(response.data);
                    if (response.data.length > 0) {
                        setSelectedDomain(response.data[0].id);
                    }
                }
            } catch (error) {
                console.error("加载域名失败:", error);
            } finally {
                setIsLoadingDomains(false);
            }
        };

        fetchDomains();
        fetchEmails();
    }, [fetchEmails]);


    // --- 事件处理函数 ---

    // 1. 处理创建邮箱
    const handleCreateEmail = async (e: FormEvent) => {
        e.preventDefault();
        setFormError(null);

        if (!newEmailName.trim() || !/^[a-zA-Z0-9_.-]+$/.test(newEmailName) || !selectedDomain) {
            setFormError("请填写有效的邮箱名称并选择域名。");
            return;
        }

        setIsCreating(true);
        try {
            const response = await createEmail({
                domainId: selectedDomain,
                emailName: newEmailName.trim(),
            });
            console.log(response);
            
            if (response.code === 201) {
                setOpenCreateDialog(false);
                toast({
                    title: "成功！",
                    description: `邮箱 ${response.data.fullEmail} 已成功创建。`,
                });
                fetchEmails(); // 成功后刷新列表
            } else {
                setFormError(response.msg || "创建失败，请重试。");
            }
        } catch (error) {
            console.error("创建邮箱失败:", error);
            setFormError("发生网络错误，请检查您的连接。");
        } finally {
            setIsCreating(false);
        }
    };

    // 2. 处理删除邮箱
    const handleDeleteEmail = async (emailId: string) => {
        setIsDeleting(true);
        try {
            const response = await deleteEmail({ id: emailId });
            if (response.code === 200) {
                toast({
                    title: "删除成功",
                    description: "邮箱账号已从您的列表中移除。",
                });
                fetchEmails(); // 成功后刷新列表
            } else {
                toast({
                    title: "删除失败",
                    description: response.msg || "操作失败，请重试。",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("删除邮箱失败:", error);
            toast({
                title: "网络错误",
                description: "删除失败，请检查您的网络。",
                variant: "destructive",
            });
        } finally {
            setIsDeleting(false);
        }
    };

    // 3. 处理创建弹窗的开关与状态重置
    const onOpenChange = (isOpen: boolean) => {
        if (!isOpen) {
            setNewEmailName("");
            setFormError(null);
            if (domainOptions.length > 0) {
                setSelectedDomain(domainOptions[0].id);
            }
        }
        setOpenCreateDialog(isOpen);
    };

    // --- JSX 渲染 ---
    return (
        <div className="space-y-6 py-2">
            {/* 页面头部 */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">邮箱列表</h1>
                    <p className="text-muted-foreground">Welcome back, {"User"}</p>
                </div>

                {/* 创建邮箱的弹窗 */}
                <Dialog open={openCreateDialog} onOpenChange={onOpenChange}>
                    <DialogTrigger asChild>
                        <Button>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            创建新邮箱账户
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                            <DialogTitle>创建新邮箱账户</DialogTitle>
                            <DialogDescription>组合一个独一无二的邮箱名称和你的域名。</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleCreateEmail}>
                            <div className="grid gap-4 py-4">
                                <p className="text-sm font-medium">邮箱地址</p>
                                <div className="flex items-center">
                                    <Input
                                        id="email-name"
                                        value={newEmailName}
                                        onChange={(e) => {
                                            setNewEmailName(e.target.value);
                                            if (formError) setFormError(null);
                                        }}
                                        placeholder="例如: sales"
                                        className="rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-0"
                                        autoFocus
                                        disabled={isCreating}
                                    />
                                    <div className="flex h-10 items-center justify-center border-y bg-muted px-3">@</div>
                                    <Select
                                        value={selectedDomain}
                                        onValueChange={setSelectedDomain}
                                        disabled={isLoadingDomains || isCreating || domainOptions.length === 0}
                                    >
                                        <SelectTrigger className="w-[180px] rounded-l-none border-l-0 focus:ring-0 focus:ring-offset-0">
                                            <SelectValue placeholder="选择域名" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {isLoadingDomains ? (
                                                <div className="flex items-center justify-center p-2"><Loader2 className="mr-2 h-4 w-4 animate-spin" />加载中...</div>
                                            ) : (
                                                domainOptions.map((domain) => (
                                                    <SelectItem key={domain.id} value={domain.id}>{domain.name}</SelectItem>
                                                ))
                                            )}
                                        </SelectContent>
                                    </Select>
                                </div>
                                {formError && <p className="text-sm text-destructive">{formError}</p>}
                            </div>
                            <DialogFooter>
                                <Button type="submit" disabled={isCreating}>
                                    {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    确认创建
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* 邮箱列表表格 */}
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[400px]">邮箱账号</TableHead>
                            <TableHead>创建时间</TableHead>
                            <TableHead className="text-right">操作</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoadingEmails ? (
                            <TableRow>
                                <TableCell colSpan={3} className="h-24 text-center">
                                    <div className="flex justify-center items-center">
                                        <Loader2 className="mr-2 h-6 w-6 animate-spin" />正在加载邮箱列表...
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : emails.length > 0 ? (
                            emails.map((account) => (
                                <TableRow key={account.id}>
                                    <TableCell className="font-medium">{account.fullEmail}</TableCell>
                                    <TableCell>{account.createdAt}</TableCell>
                                    <TableCell className="text-right">
                                        {/* 删除邮箱的确认对话框 */}
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="ghost" size="icon" disabled={isDeleting}>
                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                    <span className="sr-only">删除</span>
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>您确定要删除吗?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        此操作无法撤销。这将永久删除邮箱账号
                                                        <strong className="text-foreground"> {account.fullEmail} </strong>。
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>取消</AlertDialogCancel>
                                                    <AlertDialogAction
                                                        onClick={() => handleDeleteEmail(account.id)}
                                                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                        disabled={isDeleting}
                                                    >
                                                        {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                                        确认删除
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="h-24 text-center">
                                    暂无邮箱账号，快去创建一个吧！
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Dashboard;