
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArchiveX, 
  Check, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal, 
  RefreshCw, 
  Search, 
  Star, 
  Trash2,
  Clock,
  X,
  Mail,
  Paperclip,
  Reply,
  Forward,
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock email data
const emails = [
  {
    id: "1",
    sender: "Sarah Johnson",
    email: "sarah.j@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    subject: "Project Status Update",
    excerpt: "Here's the latest on our current sprint progress. We've managed to complete most of the high priority tasks ahead of schedule.",
    content: `<p>Hi Team,</p>
      <p>I wanted to provide a quick update on our current sprint progress:</p>
      <ul>
        <li>Feature A: Completed ✅</li>
        <li>Feature B: In progress (80% complete)</li>
        <li>Bug fixes: All P0 issues resolved</li>
      </ul>
      <p>We're on track to complete all committed items before the deadline. Let me know if you have any questions or concerns.</p>
      <p>Best regards,<br>Sarah</p>`,
    time: "10:32 AM",
    read: false,
    starred: true,
    hasAttachment: true,
    labels: ["work"],
    attachments: [
      { name: "sprint-report.pdf", size: "1.2 MB", type: "pdf" },
      { name: "progress-chart.png", size: "340 KB", type: "image" }
    ]
  },
  {
    id: "2",
    sender: "Marketing Team",
    email: "marketing@company.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marketing",
    subject: "Meeting Rescheduled",
    excerpt: "Due to some conflicts, we need to reschedule our weekly sync to Thursday at 2 PM instead of the usual Wednesday slot.",
    content: `<p>Hello everyone,</p>
      <p>Due to a scheduling conflict with the executive meeting, we need to move our regular marketing sync from Wednesday 1 PM to <strong>Thursday at 2 PM</strong> this week only.</p>
      <p>Please update your calendars accordingly. The agenda remains the same, and we'll be focusing on the upcoming product launch campaign.</p>
      <p>Regards,<br>Marketing Team</p>`,
    time: "Yesterday",
    read: true,
    starred: false,
    hasAttachment: false,
    labels: ["work"],
    attachments: []
  },
  {
    id: "3",
    sender: "Design Lab",
    email: "designs@designlab.co",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Design",
    subject: "New Design Concepts",
    excerpt: "I've attached the latest mockups for the mobile dashboard redesign. Let me know your thoughts on the color scheme.",
    content: `<p>Hey there,</p>
      <p>I've completed the mockups for the mobile dashboard redesign as we discussed in our last meeting.</p>
      <p>Key changes include:</p>
      <ul>
        <li>Simplified navigation</li>
        <li>Enhanced data visualization components</li>
        <li>New color scheme for better accessibility</li>
        <li>Improved typography for readability on smaller screens</li>
      </ul>
      <p>Please take a look at the attached files and let me know if these align with what you were envisioning. I'm particularly interested in your feedback on the color scheme.</p>
      <p>Thanks,<br>Design Team</p>`,
    time: "Yesterday",
    read: true,
    starred: false,
    hasAttachment: true,
    labels: ["personal"],
    attachments: [
      { name: "dashboard-mobile-v1.fig", size: "4.7 MB", type: "figma" },
      { name: "color-palette.pdf", size: "560 KB", type: "pdf" }
    ]
  },
  {
    id: "4",
    sender: "Finance Department",
    email: "finance@company.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Finance",
    subject: "Q3 Revenue Report",
    excerpt: "Please find attached our analysis of Q3 performance and forecast for the upcoming quarter. We've exceeded targets by 12%.",
    content: `<p>Dear Management Team,</p>
      <p>I'm pleased to share the Q3 revenue report and analysis with you. Here are some highlights:</p>
      <ul>
        <li>Total revenue: $4.2M (12% above target)</li>
        <li>Cost reduction: 8% compared to Q2</li>
        <li>Profit margin: Increased by 3 percentage points</li>
      </ul>
      <p>The attached report contains detailed breakdowns by department and product line, as well as our forecast for Q4.</p>
      <p>Please review at your convenience and let me know if you have any questions.</p>
      <p>Regards,<br>Finance Department</p>`,
    time: "Jul 23",
    read: true,
    starred: true,
    hasAttachment: true,
    labels: ["important", "work"],
    attachments: [
      { name: "Q3-Revenue-Report.xlsx", size: "2.8 MB", type: "excel" },
      { name: "Q3-Analysis.pdf", size: "1.5 MB", type: "pdf" }
    ]
  },
  {
    id: "5",
    sender: "John Smith",
    email: "john.s@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    subject: "Weekend Plans",
    excerpt: "Are you free this weekend for a quick trip to the lake? We're planning to rent a boat and do some fishing.",
    content: `<p>Hey!</p>
      <p>A few of us are planning a quick trip to Lake Austin this weekend. We're thinking of renting a boat on Saturday around 11 AM and spending the afternoon on the water, maybe do some fishing and swimming.</p>
      <p>Would you be interested in joining? We're planning to keep it small, just 5-6 people. Let me know if you'd like to come along so I can make the appropriate reservations.</p>
      <p>Cheers,<br>John</p>`,
    time: "Jul 22",
    read: true,
    starred: false,
    hasAttachment: false,
    labels: ["personal"],
    attachments: []
  },
  {
    id: "6",
    sender: "Tech Support",
    email: "support@company.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Support",
    subject: "Your Support Ticket #45678",
    excerpt: "We've resolved the issue with your account permissions. Please verify you can now access all required resources.",
    content: `<p>Hello,</p>
      <p>This is an update regarding your recent support ticket (#45678) about account permissions.</p>
      <p>We've investigated the issue and found that there was an incorrect role assignment in the IAM settings. This has now been corrected, and you should have full access to all the resources you requested.</p>
      <p>Please verify that you can now access everything you need, and let us know if you encounter any further issues.</p>
      <p>Best regards,<br>IT Support Team</p>`,
    time: "Jul 20",
    read: true,
    starred: false,
    hasAttachment: false,
    labels: ["work"],
    attachments: []
  },
  {
    id: "7",
    sender: "Alex Wong",
    email: "alex.w@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    subject: "Coffee Catch-up?",
    excerpt: "It's been a while since we last caught up. Are you available for coffee sometime next week? I'd love to hear what you've been working on.",
    content: `<p>Hey there,</p>
      <p>It's been a while since we last caught up properly! I've been meaning to reach out to see how things are going with your new project.</p>
      <p>Would you be free for a coffee catch-up sometime next week? I'm pretty flexible on Tuesday and Thursday afternoons.</p>
      <p>There's this new café that opened near the office that I've been wanting to try. Let me know what works for you!</p>
      <p>Best,<br>Alex</p>`,
    time: "Jul 18",
    read: true,
    starred: true,
    hasAttachment: false,
    labels: ["personal"],
    attachments: []
  },
];

const Inbox = () => {
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<typeof emails[0] | null>(null);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  
  const toggleSelectEmail = (id: string) => {
    if (selectedEmails.includes(id)) {
      setSelectedEmails(selectedEmails.filter(emailId => emailId !== id));
    } else {
      setSelectedEmails([...selectedEmails, id]);
    }
  };
  
  const toggleSelectAll = () => {
    if (selectedEmails.length === emails.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(emails.map(email => email.id));
    }
  };
  
  const openEmail = (email: typeof emails[0]) => {
    setSelectedEmail(email);
    setIsEmailOpen(true);
  };
  
  const closeEmail = () => {
    setIsEmailOpen(false);
  };
  
  return (
    <div className="space-y-6 py-2">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Inbox</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-opacity ${searchFocused ? "opacity-100" : "opacity-70"}`} />
          <Input
            type="search"
            placeholder="Search emails..."
            className="pl-10 h-10"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread" className="flex gap-2">
            Unread
            <span className="bg-primary/20 text-primary text-xs px-2 rounded-full">
              {emails.filter(e => !e.read).length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="starred">Starred</TabsTrigger>
          <TabsTrigger value="important">Important</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-0">
          <div className="flex gap-2 items-center py-2 px-1">
            <Checkbox 
              checked={selectedEmails.length === emails.length && emails.length > 0} 
              onCheckedChange={toggleSelectAll}
              className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
            
            {selectedEmails.length > 0 ? (
              <div className="flex items-center gap-1 flex-1">
                <Button variant="ghost" size="icon">
                  <ArchiveX className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Check className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground ml-2">
                  {selectedEmails.length} selected
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-4 text-xs text-muted-foreground ml-2">
                <span>
                  <span className="hidden sm:inline">Select messages to take action</span>
                  <span className="sm:hidden">Select to act</span>
                </span>
              </div>
            )}
            
            <div className="ml-auto flex items-center gap-1 text-sm text-muted-foreground">
              <span>1-{emails.length} of {emails.length}</span>
              <div className="flex">
                <Button variant="ghost" size="icon" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" disabled>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border rounded-md divide-y">
            {emails.map((email) => (
              <div 
                key={email.id}
                className={`group flex items-start gap-2 p-3 hover:bg-muted/50 transition-colors cursor-pointer ${!email.read ? "bg-primary/5" : ""}`}
                onClick={() => openEmail(email)}
              >
                <div className="flex items-center gap-2 pt-1" onClick={e => e.stopPropagation()}>
                  <Checkbox 
                    checked={selectedEmails.includes(email.id)}
                    onCheckedChange={() => toggleSelectEmail(email.id)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-5 w-5 text-muted-foreground"
                    onClick={() => {
                      // Toggle star functionality would go here
                    }}
                  >
                    <Star 
                      className={`h-4 w-4 ${email.starred ? "fill-amber-400 text-amber-400" : ""}`} 
                    />
                  </Button>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium truncate ${!email.read ? "text-primary font-semibold" : ""}`}>
                        {email.sender}
                      </span>
                      {!email.read && (
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {email.hasAttachment && (
                        <Paperclip className="h-3 w-3 text-muted-foreground" />
                      )}
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{email.time}</span>
                    </div>
                  </div>
                  <div className={`mb-1 truncate ${!email.read ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                    {email.subject}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {email.excerpt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="unread">
          <div className="py-8 text-center">
            <Mail className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-medium">No unread emails</h3>
            <p className="text-muted-foreground">You're all caught up!</p>
          </div>
        </TabsContent>
        
        <TabsContent value="starred">
          <div className="border rounded-md divide-y">
            {emails.filter(email => email.starred).map((email) => (
              <div 
                key={email.id}
                className={`group flex items-start gap-2 p-3 hover:bg-muted/50 transition-colors cursor-pointer ${!email.read ? "bg-primary/5" : ""}`}
                onClick={() => openEmail(email)}
              >
                <div className="flex items-center gap-2 pt-1" onClick={e => e.stopPropagation()}>
                  <Checkbox 
                    checked={selectedEmails.includes(email.id)}
                    onCheckedChange={() => toggleSelectEmail(email.id)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <Star 
                      className="h-4 w-4 fill-amber-400 text-amber-400" 
                    />
                  </Button>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium truncate ${!email.read ? "text-primary font-semibold" : ""}`}>
                        {email.sender}
                      </span>
                      {!email.read && (
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {email.hasAttachment && (
                        <Paperclip className="h-3 w-3 text-muted-foreground" />
                      )}
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{email.time}</span>
                    </div>
                  </div>
                  <div className={`mb-1 truncate ${!email.read ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                    {email.subject}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {email.excerpt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="important">
          <div className="py-8 text-center">
            <Mail className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-medium">No important emails</h3>
            <p className="text-muted-foreground">Mark emails as important to see them here</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Email detail sheet */}
      <Sheet open={isEmailOpen} onOpenChange={setIsEmailOpen}>
        <SheetContent className="w-full sm:max-w-3xl overflow-auto p-0">
          <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
            <div className="flex items-center justify-between p-4">
              <Button variant="ghost" size="icon" onClick={closeEmail}>
                <X className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon">
                  <ArchiveX className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Reply className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Forward className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                    <DropdownMenuItem>Move to folder</DropdownMenuItem>
                    <DropdownMenuItem>Print</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          
          {selectedEmail && (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6">{selectedEmail.subject}</h1>
              
              <div className="flex gap-4 mb-6">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedEmail.avatar} />
                  <AvatarFallback>{selectedEmail.sender.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <div className="font-semibold">{selectedEmail.sender}</div>
                    <div className="flex items-center text-sm text-muted-foreground gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{selectedEmail.time}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground flex flex-wrap gap-1">
                    <span>{selectedEmail.email}</span>
                    <span>to me</span>
                  </div>
                </div>
              </div>
              
              <div className="prose dark:prose-invert max-w-none mb-8" 
                   dangerouslySetInnerHTML={{ __html: selectedEmail.content }} />
              
              {selectedEmail.hasAttachment && selectedEmail.attachments.length > 0 && (
                <div className="border rounded-lg p-4 space-y-4">
                  <h3 className="text-sm font-medium">Attachments ({selectedEmail.attachments.length})</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedEmail.attachments.map((attachment, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                        <div className="h-10 w-10 bg-muted rounded flex items-center justify-center text-muted-foreground">
                          {attachment.type === "pdf" ? "PDF" : 
                            attachment.type === "excel" ? "XLS" : 
                            attachment.type === "image" ? "IMG" : 
                            attachment.type === "figma" ? "FIG" : 
                            "DOC"}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{attachment.name}</p>
                          <p className="text-xs text-muted-foreground">{attachment.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex gap-2">
                <Button className="gap-2">
                  <Reply className="h-4 w-4" />
                  Reply
                </Button>
                <Button variant="outline" className="gap-2">
                  <Forward className="h-4 w-4" />
                  Forward
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Inbox;
