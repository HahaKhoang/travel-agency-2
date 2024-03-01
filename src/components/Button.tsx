import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  edge: "sharp" | "round";
  border: boolean;
  bgColor?: "var(--color-blue-dark)" | "var(--color-red-dark)" | "transparent";
  color: string;
  hoverColor?: string;
  outlineColor?: string;
};

function Button({ edge, border, text, bgColor, color }: ButtonProps) {
  return (
    <button
      className={styles.button}
      style={{
        borderRadius: `${edge === "sharp" ? 0 : "50px"}`,
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        border: `${border ? `1px solid ${color}` : "none"}`,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
