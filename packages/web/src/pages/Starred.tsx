
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
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock email data - starred emails
const starredEmails = [
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

const Starred = () => {
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<typeof starredEmails[0] | null>(null);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  
  const toggleSelectEmail = (id: string) => {
    if (selectedEmails.includes(id)) {
      setSelectedEmails(selectedEmails.filter(emailId => emailId !== id));
    } else {
      setSelectedEmails([...selectedEmails, id]);
    }
  };
  
  const toggleSelectAll = () => {
    if (selectedEmails.length === starredEmails.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(starredEmails.map(email => email.id));
    }
  };
  
  const openEmail = (email: typeof starredEmails[0]) => {
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
          <h1 className="text-3xl font-bold tracking-tight">Starred</h1>
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
      
      <div className="flex gap-2 items-center py-2 px-1">
        <Checkbox 
          checked={selectedEmails.length === starredEmails.length && starredEmails.length > 0} 
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
              <Star className="h-4 w-4" />
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
          <span>1-{starredEmails.length} of {starredEmails.length}</span>
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
        {starredEmails.map((email) => (
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

export default Starred;
