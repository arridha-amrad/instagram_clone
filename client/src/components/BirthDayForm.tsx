import { FC } from "react";
import styled from "styled-components";
import { VSpacer } from "../styled-components/spacer-el";
import { Button } from "./accounts/form/AccountForm.elements";
import BirthDayCakeIcon from "../icons/birthday-cake.svg";
import { AuthTitle } from "./AuthPage";

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
      <form>
        <FormContainer>
          <Select>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </Select>
          <Select>
            {createDate().map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </Select>
          <Select>
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
        <Button aa_isFullWidth={true}>Next</Button>
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
  border: 1px solid #adadad;
  color: #adadad;
  padding: 0px 5px;
  border-radius: 5px;
`;

const Text = styled.p`
  width: 290px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #aaa;
`;

export default BirthDayForm;
