function Sidebar({ emails }) {
  return (
    <div style={{ width: 280, borderRight: "1px solid #e2e8f0", background: "#fff" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e2e8f0", fontWeight: 700 }}>
        All Inbox <span style={{ background: "#f472b6", color: "#fff", borderRadius: 20, padding: "1px 8px", fontSize: 12, marginLeft: 6 }}>25</span>
      </div>
      {emails.map((email) => (
        <div
          key={email.id}
          style={{
            display: "flex",
            gap: 10,
            padding: "12px 16px",
            borderBottom: "1px solid #f1f5f9",
            background: email.id === 2 ? "#ede9fe" : "#fff",
          }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "#a78bfa", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 12, 
          }}>
            {email.avatar}
          </div>
          <div >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 600, fontSize: 13 }}>{email.from}</span>
              <span style={{ fontSize: 11, color: "#94a3b8" }}>{email.time}</span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#334155" }}>{email.subject}</div>
            <div style={{ fontSize: 11, color: "#94a3b8",}}>{email.preview}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar