export default function WeekDay() {
  const today = new Date();
  let weekDay = today.getDay();
  console.log(weekDay);

  const currentDay =
    weekDay === 0
      ? (weekDay = "Sunday")
      : weekDay === 1
      ? (weekDay = "Monday")
      : weekDay === 2
      ? (weekDay = "Tuesday")
      : weekDay === 3
      ? (weekDay = "Wednesday")
      : weekDay === 4
      ? (weekDay = "Thursday")
      : weekDay === 5
      ? (weekDay = "Friday")
      : weekDay === 6
      ? (weekDay = "Saturday")
      : "error";
  console.log(currentDay);
  return <span className="currentDay"> {currentDay}</span>;
}
