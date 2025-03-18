// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Frown, Info, CircleCheckBig, TriangleAlert } from "lucide-react";
function Alert({ type }) {
	const styleAlert = `
					width: 650px;
					height: 76px;
                    padding-left:20px;
                    padding-right:20px;
					border-radius: 10px;
					font-size: 20px;
					text-align: center;
					display: flex;
					justify-content: start;
					align-items: center;
					color: black;
    `;
	return (
		<>
			<p
				css={css`
					${styleAlert}
					${type === "error"
						? `background: #f9c8c8`
						: type === "warning"
						? "background:#F9D9C8"
						: type === "info"
						? `background:#F9EBC8`
						: type === "success"
						? `background:#CEF7CD`
						: `display:none;`};
				`}
			>
				{type === "error" ? (
					<>
						<Frown
							css={css`
								color: red;
								padding-right: 15px;
							`}
						/>
						This is error alert box
					</>
				) : type === "warning" ? (
					<>
						<TriangleAlert
							css={css`
								color: #ff9900;
								padding-right: 15px;
							`}
						/>
						This is warning alert box
					</>
				) : type === "info" ? (
					<>
						<Info
							css={css`
								color: #d4b503;
								padding-right: 15px;
							`}
						/>
						This is info alert box
					</>
				) : type === "success" ? (
					<>
						<CircleCheckBig
							css={css`
								color: green;
								padding-right: 15px;
							`}
						/>
						This is success alert box
					</>
				) : (
					`display:none;`
				)}
			</p>
		</>
	);
}
export default Alert;
