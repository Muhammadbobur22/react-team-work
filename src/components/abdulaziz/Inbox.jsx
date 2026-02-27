import { useEffect, useState } from "react";



const DATA = {
  emails: [
    { id: 1, avatar: "JL", from: "Jaden Lowe", subject: "Attendance Report for 7A", preview: "Please find attached the attendance summary.", time: "01:45 PM" },
    { id: 2, avatar: "FO", from: "Finance Office", subject: "Reminder: Fee Payment Deadline", preview: "Kindly ensure all pending Grade 9 fee payments.", time: "11:00 AM" },
    { id: 3, avatar: "SL", from: "Suzanne Lim", subject: "Science Fair Volunteer Request", preview: "We are looking for staff to help coordinate.", time: "08:30 AM" },
  ],
  openEmail: {
    from: "Finance Office",
    email: "finance@studixschool.org",
    avatar: "FO",
    date: "March 7, 2035  11:00 AM",
    subject: "Reminder: Fee Payment Deadline",
    body: "Dear Admin,\n\nAll pending Grade 9 fee payments must be completed by March 15, 2035.\n\nThank you.\n— Finance Office",
  },
};
 function Inbox() {
  const [emails, setEmails] = useState([]);
  const [openEmail, setOpenEmail] = useState('');
  const [activeId, setActiveId] = useState(2);

  useEffect(() => {
    setEmails(DATA.emails);
    setOpenEmail(DATA.openEmail);
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif", background: "#f8fafc" }}>
     
      <div style={{ width: 170, background: "#fff", borderRight: "1px solid #e2e8f0", padding: "20px 12px" }}>
        <div style={{ fontWeight: 800, fontSize: 18, color: "#7c3aed", marginBottom: 24 }}> Studix</div>
        {["Dashboard", "Inbox", "Calendar", "Teachers", "Students", "Attendance", "Finance", "Notice Board"].map((item) => (
          <div key={item} style={{
            padding: "9px 10px", borderRadius: 8, fontSize: 13,
            color: item === "Inbox" ? "#7c3aed" : "#64748b",
            background: item === "Inbox" ? "#ede9fe" : "transparent",
            fontWeight: item === "Inbox" ? 700 : 400,
            marginBottom: 2,
          }}>
            {item}
          </div>
        ))}
      </div>

    
      <div style={{ width: 190, background: "#fff", borderRight: "1px solid #e2e8f0", padding: "20px 14px" }}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Category</div>
        
          <div key={name} style={{
            display: "flex", justifyContent: "space-between",
            padding: "8px 10px", borderRadius: 8, fontSize: 13,
            color: name === "All Inbox" ? "#7c3aed" : "#64748b",
            background: name === "All Inbox" ? "#ede9fe" : "transparent",
            marginBottom: 2,
          }}>
           
           
          </div>
      
        <div style={{ fontWeight: 700, fontSize: 13, marginTop: 20, marginBottom: 10 }}>Label</div>
        {[["Academic", "#f472b6", 3], ["Events", "#1e3a5f", 2], ["Finance", "#7dd3fc", 1], ["Administration", "#94a3b8", 2]].map(([name, color, count]) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 4px", fontSize: 13 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, display: "inline-block" }} />
            <span style={{ flex: 1, color: "#475569" }}>{name}</span>
            <span style={{ color: "#94a3b8", fontSize: 11 }}>{count}</span>
          </div>
        ))}
      </div>

 
      <EmailList emails={emails} activeId={activeId} onSelect={setActiveId} />

   
      {openEmail && <EmailDetail email={openEmail} />}
    </div>

  );
}
export default Inbox