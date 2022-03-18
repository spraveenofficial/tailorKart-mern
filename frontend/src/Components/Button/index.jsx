const Button = ({ isGreen, onClick, name, ...rest }) => {
  return (
    <button
      style={{ background: isGreen ? "green" : null }}
      onClick={onClick}
      className="btn"
      {...rest}
    >
      {name}
    </button>
  );
};

export default Button;
