let now = new Date();

function timestamp() {
  const Year = now.getFullYear();
  const Month = now.getMonth() + 1;
  const Date = now.getDate();
  const Hour = now.getHours();
  const Min = now.getMinutes();
  const Sec = now.getSeconds();

  let postTime = `today:${Year}/${Month}/${Date}  ${Hour}:${Min}:${Sec}`;

  let timeP = document.querySelector(".time");
  timeP.innerHTML = postTime;
}

timestamp();



