export function updateUI(messages) {
  const tbody = document.getElementById("messages");
  if (!tbody) return;

  tbody.innerHTML = "";

  messages.forEach((msg) => {
    const row = document.createElement("tr");

    const fromCell = document.createElement("td");
    fromCell.textContent = msg.from;
    row.appendChild(fromCell);

    const subjectCell = document.createElement("td");
    subjectCell.textContent = msg.subject.length > 15
      ? msg.subject.slice(0, 15) + "…"
      : msg.subject;
    row.appendChild(subjectCell);

    const dateCell = document.createElement("td");
    const receivedDate = new Date(msg.received * 1000);
    dateCell.textContent = receivedDate.toLocaleString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    row.appendChild(dateCell);

    tbody.prepend(row);
  });
}

