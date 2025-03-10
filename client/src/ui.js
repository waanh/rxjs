export function updateUI(messages) {
    const tbody = document.getElementById("messages");
  
    messages.forEach((msg) => {
      const row = document.createElement("tr");
  
      const from = document.createElement("td");
      from.textContent = msg.from;
  
      const subject = document.createElement("td");
      subject.textContent = msg.subject.length > 15 ? msg.subject.slice(0, 15) + "..." : msg.subject;
  
      const date = document.createElement("td");
      const receivedDate = new Date(msg.received * 1000);
      date.textContent = receivedDate.toLocaleTimeString() + " " + receivedDate.toLocaleDateString();
  
      row.appendChild(from);
      row.appendChild(subject);
      row.appendChild(date);
      tbody.prepend(row); 
    });
  }
  