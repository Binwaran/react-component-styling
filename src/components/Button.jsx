// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
function Button({type}) {
    const buttonPrimary = css`
        background-color: blue;
        color: white;
        padding: 32px;
        border-radius: 8px;
        font-size: 24px;
        margin-right: 16px;
    `;
    const buttonSecondary = css`
        background-color: lightblue;
        color: white;
        padding: 32px;
        border-radius: 8px;
        font-size: 24px;
    `;
    return(
        <button css={type === 'primary' ? buttonPrimary : buttonSecondary}>
            {type === 'primary' ? 'Primary Button' : 'Secondary Button'}
        </button>
    )
}
export default Button;

