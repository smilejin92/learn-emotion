import styled from '@emotion/styled';

export const Button = styled.button`
  color: turquoise;
`;

export const PrimaryButton = styled(Button)`
  color: hotpink;
`;

export const DangerButton = styled(Button)(() => ({
  color: 'red',
}));

export const Child = styled.div`
  color: red;
`;

// @emotion/babel-plugin 셋업 시 사용 가능
// export const Parent = styled.div`
//   ${Child} {
//     color: green;
//   }
// `;
