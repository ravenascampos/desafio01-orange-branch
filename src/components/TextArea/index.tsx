import { TextareaAutosize } from '@mui/material';

import { styled } from '@mui/system';

type TextareaProps = {};

function Textarea({}: TextareaProps) {
  const CustomTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
box-sizing: border-box;
border: none;
font-family: 'Roboto', sans-serif;
font-weight: 400;
line-height: 25px;
color: '#000000';
font-size: 1.375rem;
resize: none;
width: 16rem;
max-width: 48rem;
min-width: 16rem;
height: 3rem;

@media (min-width: 1024px) {
    width: 48rem
}
`,
  );
  return <CustomTextarea maxLength={55} placeholder="O que está acontecendo" />;
}

export default Textarea;
