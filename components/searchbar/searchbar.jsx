import {useRef} from "react";

import style from "./searchbar.module.css";

function Searchbar({onSearch}) {
  const yearRef = useRef();
  const monthRef = useRef();

  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  function submitHandler(event) {
    event.preventDefault();

    const selecterYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    onSearch(selecterYear, selectedMonth);
  }

  return (
    <form>
      <div className={style.container}>
        <div>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Year</label>
          <select id="month" ref={monthRef}>
            {Object.entries(months).map(([monthNumber, monthName]) => (
              <option key={monthNumber} value={monthNumber}>
                {monthName}
              </option>
            ))}
          </select>
        </div>
        <button onClick={submitHandler}>Find Events</button>
      </div>
    </form>
  );
}

export default Searchbar;
