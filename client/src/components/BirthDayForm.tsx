import { FC } from "react";
import styled from "styled-components";
import { VSpacer } from "../styled-components/spacer-el";
import { Button } from "./accounts/form/AccountForm.elements";
import BirthDayCakeIcon from "../icons/birthday-cake.svg";
import { AuthTitle } from "./AuthPage";
import UseFormAuth from "../utils/UseFormAuth";
import { setBirthDayAction } from "../redux/reduxActions/AuthActions";
import { NoValidator } from "../validators/AuthValidator";

interface BirthDayFormProps {}

const BirthDayForm: FC<BirthDayFormProps> = () => {
  const months = [
    "--month--",
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
    let dates: string[] = ["--date--"];
    for (let i = 1; i <= 31; i++) {
      dates.push(i.toString());
    }
    return dates;
  };

  const createYears = () => {
    let years: string[] = ["--year--"];
    for (
      let startYear = 1950;
      startYear < new Date().getFullYear();
      startYear++
    ) {
      years.push(startYear.toString());
    }
    return years;
  };

  const { handleChange, handleSubmit, states } = UseFormAuth(
    setBirthDayAction,
    {
      date: "",
      month: "",
      year: "",
    },
    NoValidator
  );

  return (
    <>
      <AuthTitle>
        <img src={BirthDayCakeIcon} alt="icon" />
        <p className="title">Add Your Birthday</p>
        <p className="info">
          This won't be a part of your public profile.
          <span>&nbsp;Why do I need to provide my birthday?</span>
        </p>
      </AuthTitle>
      <VSpacer aa_length="20px" />
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <Select name="month" onChange={handleChange} value={states.month}>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </Select>
          <Select name="date" onChange={handleChange} value={states.date}>
            {createDate().map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </Select>
          <Select name="year" onChange={handleChange} value={states.year}>
            {createYears().map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </FormContainer>
        <Text>
          Use your own birthday, even if this account is for a business, a pet,
          or something else.
        </Text>
        <Button
          disabled={
            states.date === "" ||
            states.month === "" ||
            states.year === "" ||
            states.date === "--date--" ||
            states.month === "--month--" ||
            states.year === "--year--"
          }
          aa_isFullWidth={true}
          type="submit"
        >
          Next
        </Button>
        <VSpacer aa_length="20px" />
      </form>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Select = styled.select`
  display: inline;
  height: 35px;
  outline: none;
  border: 1px solid #585858;
  color: #585858;
  padding: 0px 5px;
  border-radius: 5px;

  option {
    color: #333;
  }
`;

const Text = styled.p`
  text-align: center;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #aaa;
`;

export default BirthDayForm;
