
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArchiveX, 
  ChevronDown, 
  MoreHorizontal, 
  RefreshCw, 
  Search, 
  Trash2,
  Mail,
  X,
  Clock,
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

// Mock deleted emails
const trashedEmails = [
  {
    id: "1",
    sender: "Marketing Newsletter",
    email: "newsletter@marketing.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marketing",
    subject: "This Week's Special Offers",
    excerpt: "Check out our exclusive deals this week! Limited time offers on premium products.",
    content: `<p>Hello there,</p>
      <p>We have some amazing offers for you this week!</p>
      <ul>
        <li>50% off Premium Subscription</li>
        <li>Free shipping on orders over $50</li>
        <li>Buy one get one free on selected items</li>
      </ul>
      <p>These offers won't last long, so hurry!</p>
      <p>Best regards,<br>The Marketing Team</p>`,
    deletedTime: "2 hours ago",
    expiresIn: "29 days"
  },
  {
    id: "2",
    sender: "HR Department",
    email: "hr@company.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HR",
    subject: "Office Closure Notification",
    excerpt: "Please note that the office will be closed on Monday for building maintenance.",
    content: `<p>Dear Team,</p>
      <p>This is a reminder that the office will be closed on Monday, July 15th, due to scheduled building maintenance.</p>
      <p>All employees are expected to work remotely on this day. Please make sure you have everything you need to work from home effectively.</p>
      <p>If you have any questions or concerns, please contact the HR department.</p>
      <p>Thank you for your understanding.</p>
      <p>Best regards,<br>HR Department</p>`,
    deletedTime: "Yesterday",
    expiresIn: "28 days"
  },
  {
    id: "3",
    sender: "System Notification",
    email: "noreply@system.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=System",
    subject: "Your password was reset",
    excerpt: "This is a confirmation that your account password was successfully reset at 3:24 PM.",
    content: `<p>Hello,</p>
      <p>This is an automatic notification to inform you that your account password was successfully reset at 3:24 PM today.</p>
      <p>If you did not initiate this password reset, please contact our support team immediately at support@company.com.</p>
      <p>Thanks,<br>System Admin</p>`,
    deletedTime: "Jul 22",
    expiresIn: "20 days"
  },
];

const Trash = () => {
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<typeof trashedEmails[0] | null>(null);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  
  const toggleSelectEmail = (id: string) => {
    if (selectedEmails.includes(id)) {
      setSelectedEmails(selectedEmails.filter(emailId => emailId !== id));
    } else {
      setSelectedEmails([...selectedEmails, id]);
    }
  };
  
  const toggleSelectAll = () => {
    if (selectedEmails.length === trashedEmails.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(trashedEmails.map(email => email.id));
    }
  };
  
  const openEmail = (email: typeof trashedEmails[0]) => {
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
          <h1 className="text-3xl font-bold tracking-tight">Trash</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Empty trash</DropdownMenuItem>
                <DropdownMenuItem>Recover all</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-opacity ${searchFocused ? "opacity-100" : "opacity-70"}`} />
          <Input
            type="search"
            placeholder="Search trash..."
            className="pl-10 h-10"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>
      
      <div className="flex gap-2 items-center py-2 px-1">
        <Checkbox 
          checked={selectedEmails.length === trashedEmails.length && trashedEmails.length > 0} 
          onCheckedChange={toggleSelectAll}
          className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        />
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
        
        {selectedEmails.length > 0 ? (
          <div className="flex items-center gap-2 flex-1">
            <Button variant="ghost" size="sm">
              Restore
            </Button>
            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
              Delete forever
            </Button>
            <span className="text-sm text-muted-foreground ml-2">
              {selectedEmails.length} selected
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-xs text-muted-foreground ml-2">
            <span>
              Items in trash are automatically deleted after 30 days
            </span>
          </div>
        )}
      </div>
      
      {trashedEmails.length > 0 ? (
        <div className="border rounded-md divide-y">
          {trashedEmails.map((email) => (
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
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium truncate text-muted-foreground">
                    {email.sender}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      Deleted {email.deletedTime}
                    </span>
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
          <Trash2 className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-medium">Trash is empty</h3>
          <p className="text-muted-foreground">Deleted items will appear here</p>
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
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Restore
                </Button>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                  Delete forever
                </Button>
              </div>
            </div>
          </div>
          
          {selectedEmail && (
            <div className="p-6">
              <div className="bg-muted/30 border border-border px-4 py-3 rounded-md mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div className="text-sm text-muted-foreground">
                    This message was moved to trash {selectedEmail.deletedTime}
                  </div>
                  <div className="text-sm">
                    Will be deleted in {selectedEmail.expiresIn}
                  </div>
                </div>
              </div>
              
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
                      <span>{selectedEmail.deletedTime}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {selectedEmail.email}
                  </div>
                </div>
              </div>
              
              <div className="prose dark:prose-invert max-w-none mb-8" 
                   dangerouslySetInnerHTML={{ __html: selectedEmail.content }} />
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Trash;
