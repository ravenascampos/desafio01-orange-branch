'use client';

import Header from '@/components/Header';
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
      <Header />
    </main>
  );
}
