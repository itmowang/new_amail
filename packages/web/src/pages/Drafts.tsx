
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Edit, 
  MoreHorizontal, 
  RefreshCw, 
  Search, 
  Trash2,
  Mail,
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

// Mock drafts data
const drafts = [
  {
    id: "1",
    recipient: "Team Meeting",
    recipients: ["team@company.com"],
    subject: "Meeting Agenda for Next Week",
    excerpt: "Here are the topics I'd like to discuss in our next team meeting...",
    lastEdited: "11:23 AM",
  },
  {
    id: "2",
    recipient: "Customer Support",
    recipients: ["support@company.com"],
    subject: "Feature Request Follow-up",
    excerpt: "I wanted to follow up on the feature request we discussed last week...",
    lastEdited: "Yesterday",
  },
];

const Drafts = () => {
  const [selectedDrafts, setSelectedDrafts] = useState<string[]>([]);
  const [searchFocused, setSearchFocused] = useState(false);
  
  const toggleSelectDraft = (id: string) => {
    if (selectedDrafts.includes(id)) {
      setSelectedDrafts(selectedDrafts.filter(draftId => draftId !== id));
    } else {
      setSelectedDrafts([...selectedDrafts, id]);
    }
  };
  
  const toggleSelectAll = () => {
    if (selectedDrafts.length === drafts.length) {
      setSelectedDrafts([]);
    } else {
      setSelectedDrafts(drafts.map(draft => draft.id));
    }
  };
  
  const editDraft = (id: string) => {
    // In a real app, this would open the draft in the compose editor
    console.log(`Editing draft ${id}`);
  };
  
  return (
    <div className="space-y-6 py-2">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Drafts</h1>
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
            placeholder="Search drafts..."
            className="pl-10 h-10"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>
      
      <div className="flex items-center justify-between py-2 px-1">
        <div className="flex items-center gap-2">
          <Checkbox 
            checked={selectedDrafts.length === drafts.length && drafts.length > 0} 
            onCheckedChange={toggleSelectAll}
            className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          />
          {selectedDrafts.length > 0 && (
            <>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground ml-2">
                {selectedDrafts.length} selected
              </span>
            </>
          )}
        </div>
        
        <span className="text-sm text-muted-foreground">
          {drafts.length} draft{drafts.length !== 1 ? 's' : ''}
        </span>
      </div>
      
      {drafts.length > 0 ? (
        <div className="border rounded-md divide-y">
          {drafts.map((draft) => (
            <div 
              key={draft.id}
              className="group flex items-start gap-2 p-3 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-2 pt-1">
                <Checkbox 
                  checked={selectedDrafts.includes(draft.id)}
                  onCheckedChange={() => toggleSelectDraft(draft.id)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
              </div>
              
              <div 
                className="flex-1 min-w-0 cursor-pointer"
                onClick={() => editDraft(draft.id)}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium truncate">To: {draft.recipient}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      Last edited {draft.lastEdited}
                    </span>
                  </div>
                </div>
                <div className="mb-1 truncate text-muted-foreground">
                  {draft.subject}
                </div>
                <div className="text-sm text-muted-foreground truncate">
                  {draft.excerpt}
                </div>
              </div>
              
              <div className="flex items-center self-center">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => editDraft(draft.id)}
                >
                  <Edit className="h-4 w-4 text-muted-foreground" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => editDraft(draft.id)}>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <Mail className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-medium">No drafts</h3>
          <p className="text-muted-foreground">Saved drafts will appear here</p>
        </div>
      )}
      
      <div className="flex justify-center mt-4">
        <Button className="gap-2">
          <Edit className="h-4 w-4" />
          Compose new email
        </Button>
      </div>
    </div>
  );
};

export default Drafts;
