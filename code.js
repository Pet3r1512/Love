let date_1 = new Date("02/05/2023");
let date_2 = new Date();

const days = (date_1, date_2) => {
  let difference = date_1.getTime() - date_2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return Math.abs(TotalDays);
};

let result = days(date_1, date_2);

document.getElementById("days").innerHTML = result + " days";
