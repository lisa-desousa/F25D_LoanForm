import App from "../App";
import "../LoanForm.css";
import { useState } from "react";

export default function LoanForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [employed, setEmployed] = useState("");
  const [salary, setSalary] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [reason, setReason] = useState("");
  const [refundTime, setRefundTime] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit() {
    const Application = {
      name,
      phone,
      age,
      employed,
      salary,
      loanAmount,
      reason,
      refundTime,
      comment,
    };

    if (!Application.name || !Application.phone || !Application.age) {
      alert("Name, phone, and age must be filled in.");
    } else {
      console.log(Application);
      alert("Your application has been submitted.");
    }
  }

  return (
    <div className="form-container">
      <form>
        <h1>Loan Application Form</h1>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>

        <label htmlFor="employed">Are you employed?</label>
        <input
          type="checkbox"
          id="employed"
          value={employed}
          onChange={(e) => setEmployed(e.target.checked)}
        ></input>

        <label htmlFor="salary">Your salary:</label>
        <select
          name="salary"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        >
          <option value="default">Choose an interval</option>
          <option value="<500">Less than $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000-2000">$1000 - $2000</option>
          <option value=">2000">More than $2000</option>
        </select>

        <label htmlFor="loanAmount">Loan amount:</label>
        <input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        ></input>

        <label htmlFor="reason">Reason for loan:</label>
        <textarea
          id="reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        ></textarea>

        <label htmlFor="refundTime">Refund time in years:</label>
        <input
          type="number"
          id="refundTime"
          value={refundTime}
          onChange={(e) => setRefundTime(e.target.value)}
        ></input>

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <label htmlFor="submit">Submit Application:</label>
        <button type="button" id="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}
