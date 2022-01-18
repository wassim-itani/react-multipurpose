const Button = ({ path = "#", type, text, icon = null }) => {
  const className = `btn btn--${type} ${icon ? "btn--icon" : ""}`;
  return (
    <a href={path} className={className}>
      {text} {icon}
    </a>
  );
};

export default Button;
