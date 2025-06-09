function updateClock() {
  const now = new Date();

  // 시간 처리
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  document.getElementById("ampm").textContent = ampm;
  document.getElementById("hour").textContent = String(hours).padStart(2, "0");
  document.getElementById("minute").textContent = String(minutes).padStart(
    2,
    "0"
  );

  // 날짜 처리
  const day = String(now.getDate()).padStart(2, "0");
  const month = now.toLocaleString("en-US", { month: "short" });
  const year = now.getFullYear();

  document.getElementById("date").textContent = `${day}. ${month}. ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
