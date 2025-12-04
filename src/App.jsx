
// src/App.jsx
import React, { useState } from "react";

export default function App() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [address, setAddress] = useState("");

  const [history, setHistory] = useState([
    {
      id: 1,
      from: "2025-12-04",
      to: "2025-12-05",
      reason: "Birthday",
      address: "Dehradun",
      status: "Approved",
      remarks: "leave approved.",
      verifiedOn: "04/12/2025 11:35:25 AM",
    },
    {
      id: 2,
      from: "2025-11-29",
      to: "2025-11-30",
      reason: "Exam",
      address: "Exam",
      status: "Approved",
      remarks: "leave approved.",
      verifiedOn: "11/29/2025 9:16:25 AM",
    },
    {
      id: 3,
      from: "2025-11-17",
      to: "2025-11-23",
      reason: "weeding",
      address: "Brother Home",
      status: "Approved",
      remarks: "leave approved.",
      verifiedOn: "11/17/2025 12:21:48 PM",
    },
    {
      id: 4,
      from: "2025-10-04",
      to: "2025-10-05",
      reason: "Interview",
      address: "Interview",
      status: "Approved",
      remarks: "Leave request recieved from father on whatsapp.",
      verifiedOn: "10/3/2025 10:50:40 AM",
    },
    {
      id: 5,
      from: "2025-10-02",
      to: "2025-10-03",
      reason: "Outside",
      address: "Outside",
      status: "Cancelled",
      remarks: "",
      verifiedOn: "",
    },
    {
      id: 6,
      from: "2025-09-18",
      to: "2025-09-21",
      reason: "Going to Noida for Interview",
      address: "Vinnove Software Technology,Noida",
      status: "Approved",
      remarks: "Leave request recieved from father on whatsapp.",
      verifiedOn: "9/18/2025 7:30:37 AM",
    },
    {
      id: 7,
      from: "2025-09-12",
      to: "2025-09-13",
      reason: "Friend birthday",
      address: "Friends birthday",
      status: "Cancelled",
      remarks: "",
      verifiedOn: "",
    },
    {
      id: 8,
      from: "2025-08-28",
      to: "2025-08-29",
      reason: "Doc appointment",
      address: "Doc appointment",
      status: "Approved",
      remarks: "Leave request recieved from father on whatsapp.",
      verifiedOn: "8/28/2025 1:14:19 PM",
    },
    {
      id: 9,
      from: "2025-08-21",
      to: "2025-08-21",
      reason: "Doctor Visit",
      address: "Doctor visit",
      status: "Cancelled",
      remarks: "",
      verifiedOn: "",
    },
  ]);

  function applyLeave(e) {
    e.preventDefault();
    if (!fromDate || !toDate || !reason) {
      alert("Please fill From Date, To Date and Reason before applying.");
      return;
    }
    const newEntry = {
      id: Date.now(),
      from: fromDate,
      to: toDate,
      reason,
      address: address || "-",
      status: "Pending",
      remarks: "",
      verifiedOn: "",
    };
    setHistory((prev) => [newEntry, ...prev]);
    setFromDate("");
    setToDate("");
    setReason("");
    setAddress("");
  }


  return (
    <div className="page-root">
      {/* TOP BLUE BAR */}
      <header className="topbar">
        <div className="top-left">
          <button className="hamburger">
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="top-center">
           <strong className="welcome">Welcome   <span className="email-yellow">1000019225@Dit.Edu.In</span> SHASHWAT TANDON (1000019225)</strong>
        </div>
        <div className="top-right">
          <button className="logout">Logout</button>
        </div>
      </header>

      {/* LIGHT BLUE TAB BAR */}
      <div className="tab-bar">
        <div className="tab tab-active">DASHBOARD</div>
        <div className="tab">
          Apply Hostel Leave <span className="tab-close">x</span>
        </div>
      </div>

      <main className="container">
        {/* PROFILE CARD */}
        <section className="profile-card">
          {/* <div className="profile-title">Hostel Leave Request [Night out]</div> */}
          <div className="fancy-title">Hostel Leave Request [Night out]</div>

          <div className="profile-main">
            <div className="profile-photo">
              <img
    src="/profilePhoto.jpg"
    alt="SHASHWAT TANDON"
    className="profile-img"
  />
            </div>

            <div className="profile-col">
              <div className="name-line">SHASHWAT TANDON</div>
              <div className="line">
                <span className="label">Phone -</span>
                 <span className="profile-value"> 9693602687</span>
              </div>
              <div className="line">
                <span className="label">Gender -</span>   <span className="profile-value">Male</span>
              </div>
            </div>

            <div className="profile-col">
              <div className="line">
                <span className="label">Program -</span>     <span className="profile-value">BTCSE</span>

              </div>
              <div className="line">
                <span className="label">Admission Year -</span>     <span className="profile-value">2022</span>

              </div>
              <div className="line">
                <span className="label">Session -</span>     <span className="profile-value">ODD</span>

              </div>
            </div>

            <div className="profile-col profile-col-right">
              <div className="line">
                <span className="label">Email -</span>     <span className="profile-value">1000019225@dit.edu.in</span>

              </div>
              <div className="line">
                <span className="label">Roll No. -</span>     <span className="profile-value">220102794</span>

              </div>
              <div className="line">
                <span className="label">ERP ID -</span>     <span className="profile-value">1000019225</span>

              </div>
            </div>
          </div>

          <hr className="card-divider" />

          <div className="profile-footer">
            <div className="footer-item">
              <span className="label footer-label">Hostel Session</span>
            </div>
            <div className="footer-item">
              <span className="label">Year -</span> 2025
            </div>
            <div className="footer-item">
              <span className="label">Session -</span> ODD
            </div>
          </div>
        </section>

        {/* LEAVE FORM CARD  */}
        <section className="leave-card">
          <form onSubmit={applyLeave}>
            <div className="leave-grid">
              {/* LEFT LABEL COLUMN */}
              <div className="leave-label-col">
                <div className="big-label">Leave Dates:</div>
                <div className="big-label">Reason:</div>
              </div>

              {/* MIDDLE INPUT COLUMN */}
              <div className="leave-middle-col">
                <div className="small-row">
                  <div className="small-field">
                    <div className="small-label">From Date (Proceed On):</div>
                    <input
                      type="date"
                      className="date-input"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>
                  <div className="small-field">
                    <div className="small-label">To Date (Return By):</div>
                    <input
                      type="date"
                      className="date-input"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="reason-row">
                  <input
                    type="text"
                    className="reason-input"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </div>
              </div>

              {/* RIGHT ADDRESS COLUMN */}
              <div className="leave-right-col">
                <div className="small-label-1">
                  Address of the Location where you are going out:
                </div>
                <textarea
                  className="address-textarea"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="form-actions center-actions">
              <button className="apply-btn" type="submit">
                Apply Leave
              </button>
            </div>
          </form>
        </section>
{/* History Part */}
      <section className="history">
  <div className="history-box">
    <div className="history-header">Applied Leave History</div>
    <hr className="history-divider" />

    <div className="table-wrap">
      <table className="history-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Reason</th>
            <th>Address</th>
            <th>Approve / Reject</th>
            <th>Remarks</th>
            <th>Verified On</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {history.map((row, idx) => (
            <tr
              key={row.id}
              className={row.status === "Cancelled" ? "row-cancelled" : ""}
            >
              {/* <td>{history.length - idx}</td> */}
              <td>{idx+1}</td>
              <td>{row.from}</td>
              <td>{row.to}</td>
              <td>{row.reason}</td>
              <td>{row.address}</td>
              <td>{row.status}</td>
              <td>{row.remarks}</td>
              <td>{row.verifiedOn}</td>
              {/* <td className="cancel-col">
                {row.status !== "Cancelled" ? (
                  <button
                    className="link-btn"
                    onClick={() => cancelEntry(row.id)}
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    className="link-btn muted"
                    onClick={() => removeEntry(row.id)}
                  >
                    Remove
                  </button>
                )}
              </td> */}
              <td className="cancel-col"></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}
