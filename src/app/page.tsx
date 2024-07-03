'use client';

import InputSelect from '@/components/InputSelect';
import useInputSelectOptionsData from '@/components/InputSelect/InputSelectOptions.hooks';
import TweetUser from '@/components/TwettUser';

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
      <TweetUser
        userName="Usuário Teste"
        userEmail="userText"
        date="Apr 1"
        description="O truncamento deve ser aplicável condicionalmente nesta longa linha de texto, pois esta é uma linha muito mais longa do que o contêiner pode suportar."
        comments="10"
        retweets="10"
        likes="10"
      />
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
