const colors = [
  "#0a0808",
  "#ffea37",
  "#1caffe",
  "#f700e0",
  "#ff2936",
  "#1ffcd7",
  "#44fd09",
  "#e3f2de",
];
let colorIndex = 0;
document.getElementById("theme-btn").addEventListener("click", function () {
  document.body.style.background = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});


function completeButton(button, completeBtn) {
  if (button.disabled) return;
  alert("Board Updated Successfully");

  let assignedTask = document.getElementById("assigned-task");
  let assignedCount = parseInt(assignedTask.innerText);
  if (assignedCount > 0) {
    assignedTask.innerText = assignedCount - 1;
  }

  let navCount = document.getElementById("navCount");
  let navCountPlus = parseInt(navCount.innerText);
  navCount.innerText = navCountPlus + 1;

  button.disable = true;
  button.innerText = "Completed";
  button.style.background = "gray";

  now = new Date();
  const bdTime = now.toLocaleTimeString("en-BD", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  let activityMessage = document.getElementById("activityMessage");
  let createParagraph = document.createElement("p");
  createParagraph.innerText = `You have completed the task "${completeBtn}" at ${bdTime}`;
  activityMessage.appendChild(createParagraph);

  const clearActivityLog = document.getElementById("all_clear");
  clearActivityLog.addEventListener("click", function () {
    activityMessage.innerHTML = "";
  });

}
