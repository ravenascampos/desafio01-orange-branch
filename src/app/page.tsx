'use client';

import InputSelect from '@/components/InputSelect';
import useInputSelectOptionsData from '@/components/InputSelect/InputSelectOptions.hooks';

export default function Home() {
  const {
    day,
    month,
    year,
    days,
    months,
    years,
    setDay,
    error,
    isError,
    handleMonthChange,
    handleYearChange,
  } = useInputSelectOptionsData();

  return (
    <main>
      {/* <InputSelect
        label="Mês"
        options={months}
        value={month}
        onChange={handleMonthChange}
        error={isError}
      />
      <InputSelect
        label="Dia"
        options={days}
        value={day}
        onChange={(_, newValue) => setDay(newValue)}
        disabled={!days.length}
        error={isError}
      />
      <InputSelect
        label="Ano"
        options={years}
        value={year}
        onChange={handleYearChange}
        error={isError}
      /> */}
    </main>
  );
}
