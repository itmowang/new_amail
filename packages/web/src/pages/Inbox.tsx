import { useState, useEffect, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllMail } from "@/api/email";
import { allEmail } from "@/api/userEmailDomain";
import {
    Loader2,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
    RefreshCw,
    Search,
    ArchiveX,
    Trash2,
    Mail,
    X,
    Reply,
    Forward,
    Paperclip,
    Star,
    Clock,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// --- 1. 定义数据类型 ---

// 用户自己的邮箱地址
interface UserEmail {
    id: string;
    fullEmail: string;
}

// 单封邮件的数据，增加了 fromName 字段
interface MailItem {
    id: string;
    fromName: string; // 从 body 解析出的发件人姓名
    fromEmail: string; // 从 body 解析出的发件人邮箱
    subject: string;
    body: string;
    createdAt: string;
}

// 分页信息
interface Pagination {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}


// --- 2. 新增: 解析发件人信息的工具函数 ---
const parseSenderInfo = (htmlBody: string): { fromName: string; fromEmail: string } => {
    // 尝试用正则表达式从HTML中提取姓名和邮箱
    const nameMatch = htmlBody.match(/<div class="businessCard_name"[^>]*>([^<]+)<\/div>/);
    const emailMatch = htmlBody.match(/<div class="businessCard_mail"[^>]*>([^<]+)<\/div>/);

    return {
        fromName: nameMatch ? nameMatch[1] : "未知发件人", // 如果没匹配到，提供默认值
        fromEmail: emailMatch ? emailMatch[1] : "未知邮箱",
    };
};


const Inbox = () => {
    const { toast } = useToast();

    // --- 3. 状态管理 ---
    const [userEmails, setUserEmails] = useState<UserEmail[]>([]);
    const [selectedUserEmailId, setSelectedUserEmailId] = useState<string | null>(null);
    const [mailItems, setMailItems] = useState<MailItem[]>([]);
    const [pagination, setPagination] = useState<Pagination>({ page: 1, pageSize: 15, total: 0, totalPages: 1 });
    const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [loading, setLoading] = useState({ userEmails: true, mail: true });

    // --- 4. 数据获取逻辑 (核心改动) ---
    const fetchMailForSelectedEmail = useCallback(async (emailId: string, page: number, pageSize: number) => {
        setLoading(prev => ({ ...prev, mail: true }));
        try {
            const res = await getAllMail({
                userEmailDomainId: emailId,
                page: page,
                pageSize: pageSize,
            });

            if (res.code === 200 && res.data) {
                // 在这里处理返回的数据，解析发件人
                const formattedMail = res.data.list.map((item: any): MailItem => {
                    const senderInfo = parseSenderInfo(item.body);
                    return {
                        id: item.id,
                        subject: item.subject,
                        body: item.body,
                        createdAt: item.createdAt,
                        fromName: senderInfo.fromName,
                        fromEmail: senderInfo.fromEmail,
                    };
                });

                setMailItems(formattedMail);
                setPagination({
                    page: res.data.page,
                    pageSize: res.data.pageSize,
                    total: res.data.total,
                    totalPages: Math.ceil(res.data.total / res.data.pageSize) || 1,
                });
            } else {
                 toast({ title: "错误", description: `加载邮件失败: ${res.msg}`, variant: "destructive" });
            }
        } catch (error) {
            toast({ title: "网络错误", description: "无法加载邮件。", variant: "destructive" });
        } finally {
            setLoading(prev => ({ ...prev, mail: false }));
        }
    }, [toast]);

    // 初始化加载逻辑 (保持不变)
    useEffect(() => {
        const initialize = async () => {
            setLoading({ userEmails: true, mail: true });
            try {
                const res = await allEmail({});
                if (res.code === 200 && res.data && res.data.length > 0) {
                    const fetchedUserEmails: UserEmail[] = res.data;
                    setUserEmails(fetchedUserEmails);
                    const firstEmailId = fetchedUserEmails[0].id;
                    setSelectedUserEmailId(firstEmailId);
                    await fetchMailForSelectedEmail(firstEmailId, 1, 15);
                } else {
                    setUserEmails([]);
                    setMailItems([]);
                    toast({ title: "提示", description: "您还没有创建任何邮箱地址。" });
                }
            } catch (error) {
                toast({ title: "初始化失败", description: "无法加载您的邮箱列表。", variant: "destructive" });
            } finally {
                setLoading({ userEmails: false, mail: false });
            }
        };
        initialize();
    }, [fetchMailForSelectedEmail, toast]);

    // --- 5. 事件处理 (保持不变) ---
    const handleSelectUserEmail = (id: string) => {
        if (id === selectedUserEmailId) return;
        setSelectedUserEmailId(id);
        setPagination(prev => ({ ...prev, page: 1 }));
        fetchMailForSelectedEmail(id, 1, 15);
    };

    const handlePageChange = (direction: 'next' | 'prev') => {
        const newPage = direction === 'next' ? pagination.page + 1 : pagination.page - 1;
        if (selectedUserEmailId) {
            setPagination(prev => ({ ...prev, page: newPage }));
            fetchMailForSelectedEmail(selectedUserEmailId, newPage, pagination.pageSize);
        }
    };
    
    const openMail = (mail: MailItem) => {
        setSelectedMail(mail);
        setIsSheetOpen(true);
    };
    
    const currentEmailName = userEmails.find(e => e.id === selectedUserEmailId)?.fullEmail || "选择您的邮箱";

    // --- 6. JSX 渲染 (更新显示逻辑) ---
    return (
        <div className="space-y-4 py-2">
            {/* 页面头部和邮箱选择器 */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-bold tracking-tight">收件箱</h1>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="min-w-[220px] justify-between">
                                {loading.userEmails ? <Loader2 className="h-4 w-4 animate-spin" /> : <span>{currentEmailName}</span>}
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>我的邮箱地址</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {userEmails.map(email => (
                                <DropdownMenuItem key={email.id} onSelect={() => handleSelectUserEmail(email.id)}>
                                    <Mail className="mr-2 h-4 w-4" />
                                    <span>{email.fullEmail}</span>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => selectedUserEmailId && fetchMailForSelectedEmail(selectedUserEmailId, pagination.page, pagination.pageSize)} disabled={loading.mail}>
                        {loading.mail ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
                    </Button>
                </div>
            </div>

            {/* 搜索框 */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="搜索邮件..." className="pl-10 h-10" />
            </div>

            {/* 邮件列表 */}
            <Tabs defaultValue="all">
                <TabsList className="mb-4"><TabsTrigger value="all">全部</TabsTrigger></TabsList>
                <TabsContent value="all" className="space-y-0">
                    {/* 工具栏和分页 */}
                    <div className="flex gap-2 items-center py-2 px-1">
                        <Checkbox disabled /><ChevronDown className="h-4 w-4 text-muted-foreground" />
                        <div className="ml-auto flex items-center gap-1 text-sm text-muted-foreground">
                            <span>{pagination.total > 0 ? `${(pagination.page - 1) * pagination.pageSize + 1}-${Math.min(pagination.page * pagination.pageSize, pagination.total)}` : 0} of {pagination.total}</span>
                            <div className="flex">
                                <Button variant="ghost" size="icon" onClick={() => handlePageChange('prev')} disabled={pagination.page <= 1 || loading.mail}><ChevronLeft className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon" onClick={() => handlePageChange('next')} disabled={pagination.page >= pagination.totalPages || loading.mail}><ChevronRight className="h-4 w-4" /></Button>
                            </div>
                        </div>
                    </div>
                    {/* 邮件列表容器 */}
                    <div className="border rounded-md divide-y min-h-[300px]">
                        {loading.mail ? (
                            <div className="flex justify-center items-center h-full min-h-[300px]"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
                        ) : mailItems.length > 0 ? (
                            mailItems.map((mail) => (
                                <div key={mail.id} className="group flex items-start gap-2 p-3 hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => openMail(mail)}>
                                    <div className="flex items-center gap-2 pt-1"><Checkbox disabled onClick={(e) => e.stopPropagation()} /></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            {/* 使用解析出的 fromName */}
                                            <span className="font-medium truncate text-primary">{mail.fromName}</span>
                                            <span className="text-xs text-muted-foreground whitespace-nowrap">{new Date(mail.createdAt).toLocaleString()}</span>
                                        </div>
                                        <div className="mb-1 truncate font-medium text-foreground">{mail.subject}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col justify-center items-center h-full min-h-[300px]">
                                <Mail className="mx-auto h-12 w-12 text-muted-foreground/50" />
                                <h3 className="mt-4 text-lg font-medium">收件箱为空</h3>
                                <p className="text-muted-foreground">此邮箱还没有收到任何邮件。</p>
                            </div>
                        )}
                    </div>
                </TabsContent>
            </Tabs>

            {/* 邮件详情页 */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent className="w-full sm:max-w-3xl overflow-auto p-0">
                    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b p-4 flex items-center justify-between">
                        <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}><X className="h-4 w-4" /></Button>
                        <div className="flex items-center gap-1">
                           <Button variant="ghost" size="icon"><ArchiveX className="h-4 w-4" /></Button>
                           <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4" /></Button>
                        </div>
                    </div>
                    {selectedMail && (
                        <div className="p-6">
                            <h1 className="text-2xl font-bold mb-6">{selectedMail.subject}</h1>
                            <div className="flex gap-4 mb-6">
                                <Avatar className="h-10 w-10">
                                    {/* 使用解析出的 fromName */}
                                    <AvatarFallback>{selectedMail.fromName.charAt(0).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    {/* 使用解析出的 fromName 和 fromEmail */}
                                    <div className="font-semibold">{selectedMail.fromName}</div>
                                    <div className="text-sm text-muted-foreground">{selectedMail.fromEmail}</div>
                                    <div className="text-sm text-muted-foreground mt-1">{new Date(selectedMail.createdAt).toLocaleString()}</div>
                                </div>
                            </div>
                            <div
                                className="prose dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: selectedMail.body }}
                            />
                             <div className="mt-8 flex gap-2">
                                <Button className="gap-2"><Reply className="h-4 w-4" />回复</Button>
                                <Button variant="outline" className="gap-2"><Forward className="h-4 w-4" />转发</Button>
                            </div>
                        </div>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Inbox;