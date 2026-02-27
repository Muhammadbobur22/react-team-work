

const DATA = {
  categories: [
    { id: "inbox", label: "All Inbox",   },
    { id: "starred", label: "Starred",  },
    { id: "sent", label: "Sent",   },
    { id: "drafts", label: "Drafts", },
    { id: "spam", label: "Spam",  },
    { id: "trash", label: "Trash", },
  ],
  labels: [
    { id: "academic", label: "Academic", },
    { id: "events", label: "Events",  },
    { id: "finance", label: "Finance", },
    { id: "admin", label: "Administration",  },
  ],
  navItems: [
    { id: "dashboard", label: "Dashboard",  },
    { id: "inbox", label: "Inbox", },
    { id: "calendar", label: "Calendar",  },
    { id: "teachers", label: "Teachers",  },
    { id: "students", label: "Students",  },
    { id: "attendance", label: "Attendance",  },
    { id: "finance", label: "Finance",},
    { id: "notice", label: "Notice Board",  },
  ],
  emails: [
    {
      id: 1,
      from: "Jaden Lowe",
      avatar: "JL",

      subject: "Attendance Report for 7A",
      preview: "Please find attached the attendance summary for class 7A for this week.",
      time: "01:45 PM",
      tag: null,
      unread: true,
    },
    {
      id: 2,
      from: "Finance Office",
      avatar: "FO",
      subject: "Reminder: Fee Payment Deadline",
      preview: "Kindly ensure all pending Grade 9 fee payments are completed by March 15.",
      time: "11:00 AM",
      tag: "finance",
  
    },
    {
      id: 3,
      from: "Suzanne Lim",
      avatar: "SL",
      subject: "Science Fair Volunteer Request",
      preview: "We are looking for staff to help coordinate the upcoming Science Fair on March 20.",
      time: "08:30 AM",
      
    },
    {
      id: 4,
      from: "Principal's Office",
      avatar: "PO",
      subject: "Teacher Development Workshop",
      preview: "A professional development workshop for all teachers has been scheduled for next...",
      time: "Yesterday",
      tag: "events",

    },
    {
      id: 5,
      from: "Librarian",
      avatar: "LB",
      subject: "New Books Arrival Notification",
      preview: "The library has received 120 new books, including updated references for science...",
      time: "Yesterday",
   
    },
    {
      id: 6,
      from: "Parent Association",
      avatar: "PA",
      subject: "Parent-Teacher Meeting Invitation",
      preview: "You are invited to attend the Parent-Teacher Meeting scheduled on March 18.",
      time: "5 Mar",
      tag: "events",
  
    },
    {
      id: 7,
      from: "Sports Department",
      avatar: "SD",
      subject: "Annual Sports Competition Details",
      preview: "Final match schedules and venue arrangements for the Annual Sports Com...",
      time: "5 Mar",
      tag: "events",

    },
  ],
  openEmail: {
    id: 2,
    from: "Finance Office",
    email: "finance@studixschool.org",
    avatar: "FO",
    date: "March 7, 2035  11:00 AM",
    subject: "Reminder: Fee Payment Deadline",
    body: `Dear Admin,

This is a gentle reminder that all pending Grade 9 student fee payments must be completed by March 15, 2035. Kindly check the finance section of the dashboard to verify payments and follow up with students or parents if required.

Thank you for your cooperation.
— Finance Office`,
  },
};