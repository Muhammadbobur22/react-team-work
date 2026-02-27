function Email({ email }) {
  return (
    <div style={{ flex: 1, padding: 28, background: "#fff", }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div style={{
          width: 42, height: 42, borderRadius: "50%",
          background: "#7dd3fc", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: 14,
        }}>
          {email.avatar}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15 }}>{email.from}</div>
          <div style={{ fontSize: 12, color: "#94a3b8" }}>{email.email}</div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 12, color: "#94a3b8" }}>{email.date}</div>
      </div>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{email.subject}</h2>
      <div style={{ fontSize: 14, color: "#475569", lineHeight: 1.8, }}>
        {email.body}
      </div>
      <div style={{ marginTop: 24, border: "1px solid #e2e8f0", borderRadius: 10, padding: 12 }}>
        <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>
          To: <span style={{ background: "#f1f5f9", borderRadius: 20, padding: "2px 10px", color: "#334155" }}>{email.email} ✕</span>
        </div>
        <textarea
          placeholder="Type something..."
          style={{
            width: "100%", border: "none", outline: "none",
            fontSize: 13, color: "#475569", 
            height: 60, fontFamily: "inherit", boxSizing: "border-box",
          }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
          <button style={{
            background: "linear-gradient(135deg,#f472b6,#a855f7)",
            color: "#fff", border: "none", borderRadius: 20,
            padding: "7px 20px", cursor: "pointer", fontSize: 13, fontWeight: 600,
          }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Email