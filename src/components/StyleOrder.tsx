/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from 'react';

type ParagraphComponentProps = ComponentPropsWithoutRef<'p'>;

export const P = ({ children, ...rest }: ParagraphComponentProps) => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: '1.5',
      fontFamily: 'sans-serif',
      color: 'black',
    }}
    {...rest} // <- props contains the `className` prop
  >
    {children}
  </p>
);

// override P style
export const ArticleText = ({ children, ...rest }: ParagraphComponentProps) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: 'Georgia, serif',
      color: 'darkgray',
    }}
    {...rest} // <- props contains the `className` prop
  >
    {children}
  </P>
);

// override Article style
export const SmallArticleText = ({
  children,
  ...rest
}: ParagraphComponentProps) => (
  <ArticleText
    css={{
      fontSize: 10,
    }}
    {...rest} // <- props contains the `className` prop
  >
    {children}
  </ArticleText>
);
