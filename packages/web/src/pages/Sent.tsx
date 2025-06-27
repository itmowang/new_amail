
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock sent emails data
const sentEmails = [
  {
    id: "1",
    recipient: "Product Team",
    recipients: ["product@company.com", "design@company.com"],
    subject: "Design Review Meeting Notes",
    excerpt: "Here are the key points we discussed in today's design review meeting. Let me know if I missed anything important.",
    content: `<p>Hi team,</p>
      <p>I wanted to summarize the key points from our design review meeting this morning:</p>
      <ul>
        <li>Mobile navigation improvements are approved for development</li>
        <li>User profile page redesign needs additional iterations</li>
        <li>New color scheme for dark mode is approved</li>
        <li>Typography updates will be implemented in the next sprint</li>
      </ul>
      <p>Please review and let me know if I missed anything important or if you have any questions.</p>
      <p>Best regards,</p>`,
    time: "2:45 PM",
    hasAttachment: true,
    attachments: [
      { name: "meeting-notes.pdf", size: "450 KB", type: "pdf" },
      { name: "design-assets.zip", size: "2.3 MB", type: "zip" }
    ]
  },
  {
    id: "2",
    recipient: "Alex Morgan",
    recipients: ["alex.m@example.com"],
    subject: "Project Timeline Update",
    excerpt: "After our discussion with the stakeholders, we need to adjust our project timeline. Here's my proposal for the new milestones.",
    content: `<p>Hi Alex,</p>
      <p>Following our discussion with the stakeholders yesterday, I think we need to adjust our project timeline to better accommodate the new requirements.</p>
      <p>Here's my proposal for the revised milestones:</p>
      <ul>
        <li>Phase 1 Research: Extend by 1 week (until June 10)</li>
        <li>Initial Prototype: June 24 (unchanged)</li>
        <li>User Testing: July 8-15 (pushed back 1 week)</li>
        <li>Final Delivery: August 5 (pushed back 2 weeks)</li>
      </ul>
      <p>This gives us enough buffer to handle any unexpected issues while still delivering before the Q3 deadline.</p>
      <p>Let me know your thoughts on this proposal.</p>
      <p>Best regards,</p>`,
    time: "Yesterday",
    hasAttachment: false,
    attachments: []
  },
  {
    id: "3",
    recipient: "Customer Support",
    recipients: ["support@company.com"],
    subject: "Customer Feedback Improvements",
    excerpt: "I've been reviewing customer feedback from the last quarter and have some suggestions for improving our support response time.",
    content: `<p>Hey Support Team,</p>
      <p>I've spent some time analyzing the customer feedback data from Q2, and I've identified a few areas where we could make meaningful improvements:</p>
      <ol>
        <li>Response time for technical queries is averaging 24 hours - I think we could reduce this to under 12 hours with some process changes</li>
        <li>Billing issues are taking too many touchpoints to resolve - we should create better troubleshooting guides</li>
        <li>The knowledge base needs more visual examples and step-by-step guides</li>
      </ol>
      <p>I've put together some specific recommendations in the attached document. I'd love to discuss these with the team during next week's meeting.</p>
      <p>Thanks,</p>`,
    time: "Jul 25",
    hasAttachment: true,
    attachments: [
      { name: "support-improvements.docx", size: "1.1 MB", type: "word" }
    ]
  },
];

const Sent = () => {
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<typeof sentEmails[0] | null>(null);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  
  const toggleSelectEmail = (id: string) => {
    if (selectedEmails.includes(id)) {
      setSelectedEmails(selectedEmails.filter(emailId => emailId !== id));
    } else {
      setSelectedEmails([...selectedEmails, id]);
    }
  };
  
  const toggleSelectAll = () => {
    if (selectedEmails.length === sentEmails.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(sentEmails.map(email => email.id));
    }
  };
  
  const openEmail = (email: typeof sentEmails[0]) => {
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
          <h1 className="text-3xl font-bold tracking-tight">Sent</h1>
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
          checked={selectedEmails.length === sentEmails.length && sentEmails.length > 0} 
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
          <span>1-{sentEmails.length} of {sentEmails.length}</span>
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
      
      {sentEmails.length > 0 ? (
        <div className="border rounded-md divide-y">
          {sentEmails.map((email) => (
            <div 
              key={email.id}
              className="group flex items-start gap-2 p-3 hover:bg-muted/50 transition-colors cursor-pointer"
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
                  <Star className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium truncate">To: {email.recipient}</span>
                  <div className="flex items-center gap-2">
                    {email.hasAttachment && (
                      <Paperclip className="h-3 w-3 text-muted-foreground" />
                    )}
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{email.time}</span>
                  </div>
                </div>
                <div className="mb-1 truncate text-muted-foreground">
                  {email.subject}
                </div>
                <div className="text-sm text-muted-foreground truncate">
                  {email.excerpt}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <Mail className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-medium">No sent messages</h3>
          <p className="text-muted-foreground">Emails you send will appear here</p>
        </div>
      )}

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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Forward</DropdownMenuItem>
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
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <div className="font-semibold">To: {selectedEmail.recipient}</div>
                    <div className="flex items-center text-sm text-muted-foreground gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{selectedEmail.time}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground flex flex-wrap gap-1">
                    {selectedEmail.recipients.map((recipient, index) => (
                      <span key={index}>{recipient}{index < selectedEmail.recipients.length - 1 ? ", " : ""}</span>
                    ))}
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
                            attachment.type === "word" ? "DOC" : 
                            attachment.type === "zip" ? "ZIP" : 
                            "FILE"}
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
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sent;
