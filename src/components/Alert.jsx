// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Alert({ type }) {
  const alertStyles = {
    error: css`
      background-color: #FFCBCB;
      color: black;
      text-align: left;
      padding: 16px;
      border-radius: 8px;
      font-size: 18px;
      margin-bottom: 16px;
    `,
    warning: css`
      background-color: #FFCAA4;
      color: black;
      text-align: left;
      padding: 16px;
      border-radius: 8px;
      font-size: 18px;
      margin-bottom: 16px;
    `,
    info: css`
      background-color: #FFE9AE;
      color: black;
      text-align: left;
      padding: 16px;
      border-radius: 8px;
      font-size: 18px;
      margin-bottom: 16px;
    `,
    success: css`
      background-color: #f1f7b5;
      color: black;
      text-align: left;
      padding: 16px;
      border-radius: 8px;
      font-size: 18px;
      margin-bottom: 16px;
    `,
  };

  const message = {
    error: 'This is error alert box',
    warning: 'This is warning alert box',
    info: 'This is info alert box',
    success: 'This is success alert box',
  };

  return (
    <div css={alertStyles[type]}>
      {message[type]}
    </div>
  );
}

export default Alert;