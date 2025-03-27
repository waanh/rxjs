export function updateUI(messages) {
    const tbody = document.getElementById("messages");
    if (!tbody) return;

    tbody.innerHTML = "";

    const receivedDate = new Date(msg.received * 1000);
    dateCell.textContent = receivedDate.toLocaleString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    });


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
  