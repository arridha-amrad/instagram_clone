import { FC } from "react";

interface BirthDayFormProps {}

const BirthDayForm: FC<BirthDayFormProps> = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "Mei",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const createDate = () => {
    let dates: number[] = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(i);
    }
    return dates;
  };

  const createYears = () => {
    let years: number[] = [];
    for (
      let startYear = 1950;
      startYear < new Date().getFullYear();
      startYear++
    ) {
      years.push(startYear);
    }
    return years;
  };

  return (
    <form>
      <select>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select>
        {createDate().map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      <select>
        {createYears().map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
};

export default BirthDayForm;
