import { Link as MuiLink } from '@mui/material';

type LinkProps = {
  text: React.ReactNode;
  variant:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  href: string;
};

function Link({ text, variant, href }: LinkProps) {
  return (
    <MuiLink href={href} variant={variant} underline="hover">
      {text}
    </MuiLink>
  );
}

export default Link;
