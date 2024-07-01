import { useEffect, useState } from 'react';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i,
);

const calculateAge = (day: number, month: string, year: number): number => {
  const birthDate = new Date(year, months.indexOf(month), day);
  const ageDiffMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDiffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export default function useInputSelectOptionsData() {
  const [day, setDay] = useState<number | null>(null);
  const [month, setMonth] = useState<string | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [days, setDays] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (month && year) {
      const monthIndex = months.indexOf(month) + 1;
      const daysInMonth = getDaysInMonth(monthIndex, year);
      setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    }
  }, [month, year]);

  useEffect(() => {
    if (day && month && year) {
      const age = calculateAge(day, month, year);
      if (age < 18) {
        setIsError(true);
        setError('Você deve ter pelo menos 18 anos.');
      } else {
        setIsError(false);
        setError(null);
      }
    }
  }, [day, month, year]);

  const handleMonthChange = (_: unknown, newValue: string | null) => {
    setMonth(newValue);
    setDay(null);
  };

  const handleYearChange = (_: unknown, newValue: number | null) => {
    setYear(newValue);
    setDay(null);
  };

  return {
    day,
    month,
    year,
    days,
    months,
    years,
    error,
    setDay,
    isError,
    handleMonthChange,
    handleYearChange,
  };
}
