// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
	const Primary = `background: #074EE8;`;
	const Secondary = `background: #07A4E8;`;
	return (
		<>
			<button
				css={css`
					width: 171px;
					height: 50px;
					background: blue;
					${type === "Primary"
						? Primary
						: type === "Secondary"
						? Secondary
						: `background: #eb1b1b`};
				`}
			>
				Button
			</button>
		</>
	);
}

export default Button;
