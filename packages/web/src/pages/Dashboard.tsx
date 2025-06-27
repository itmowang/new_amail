
import { Link } from "react-router-dom";
import { Inbox, Star, Send, Edit, Trash, Calendar, Clock, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { useAuth } from "@/contexts/AuthContext";
import { Progress } from "@/components/ui/progress";

// Mock data
const stats = [
  { name: "Inbox", icon: Inbox, color: "text-blue-500", count: 12, path: "/inbox" },
  { name: "Starred", icon: Star, color: "text-amber-500", count: 3, path: "/starred" },
  { name: "Sent", icon: Send, color: "text-green-500", count: 45, path: "/sent" },
  { name: "Drafts", icon: Edit, color: "text-slate-500", count: 2, path: "/drafts" },
];

const recentEmails = [
  { 
    id: "1", 
    subject: "Project Status Update", 
    sender: "Sarah Johnson", 
    excerpt: "Here's the latest on our current sprint progress. We've managed to...",
    time: "10:32 AM",
    read: false
  },
  { 
    id: "2", 
    subject: "Meeting Rescheduled", 
    sender: "Marketing Team", 
    excerpt: "Due to some conflicts, we need to reschedule our weekly sync to...",
    time: "Yesterday",
    read: true
  },
  { 
    id: "3", 
    subject: "New Design Concepts", 
    sender: "Design Lab", 
    excerpt: "I've attached the latest mockups for the mobile dashboard...",
    time: "Yesterday",
    read: true
  },
  { 
    id: "4", 
    subject: "Q3 Revenue Report", 
    sender: "Finance Department", 
    excerpt: "Please find attached our analysis of Q3 performance and forecast for...",
    time: "Jul 23",
    read: true
  },
];

const upcomingMeetings = [
  { 
    id: "1", 
    title: "Weekly Team Standup", 
    time: "Today, 2:00 PM", 
    participants: ["Sarah J.", "Michael T.", "+3"],
  },
  { 
    id: "2", 
    title: "Client Presentation", 
    time: "Tomorrow, 10:00 AM", 
    participants: ["Robert K.", "Emma S.", "+2"],
  },
];

const Dashboard = () => {
  // const { user } = useAuth();

  return (
    <div className="space-y-6 py-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, { "User"}</p>
        </div>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          Compose
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="hover:shadow-lg transition-all duration-200">
            <Link to={stat.path}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className={`p-2 rounded-full bg-white/10 dark:bg-black/20 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold">{stat.count}</span>
                </div>
                <div className="mt-3">
                  <p className="font-medium text-lg">{stat.name}</p>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Recent Emails</CardTitle>
              <CardDescription>Your latest messages</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {recentEmails.map((email) => (
                <Link 
                  key={email.id} 
                  to={`/inbox/${email.id}`}
                  className={`block rounded-md p-3 transition-all hover:bg-muted ${!email.read ? "bg-primary/5" : ""}`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${!email.read ? "text-primary" : ""}`}>{email.sender}</span>
                      {!email.read && (
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{email.time}</span>
                  </div>
                  <div className={`font-medium mb-1 ${!email.read ? "text-foreground" : "text-muted-foreground"}`}>
                    {email.subject}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {email.excerpt}
                  </div>
                </Link>
              ))}
              <div className="pt-3 text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/inbox">View All Emails</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Storage</CardTitle>
              <CardDescription>Your email storage usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">6.2 GB of 15 GB used</span>
                    <span className="text-sm text-muted-foreground">41%</span>
                  </div>
                  <Progress value={41} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Inbox</span>
                    </div>
                    <span className="text-sm">3.2 GB</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                      <span className="text-sm">Attachments</span>
                    </div>
                    <span className="text-sm">2.4 GB</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Other</span>
                    </div>
                    <span className="text-sm">0.6 GB</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Manage Storage
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming</CardTitle>
              <CardDescription>Scheduled meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="flex items-start gap-3 pb-3 border-b last:border-none">
                    <div className="p-2 bg-muted rounded-md">
                      <Calendar className="h-4 w-4 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{meeting.title}</p>
                      <div className="flex items-center gap-1 mt-1 mb-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{meeting.time}</span>
                      </div>
                      <div className="flex -space-x-2">
                        {meeting.participants.map((participant, i) => (
                          <div 
                            key={i} 
                            className={`h-6 w-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-primary-foreground font-medium ring-2 ring-background`}
                          >
                            {participant.includes("+") ? participant : participant.charAt(0)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
