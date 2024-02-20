const Button = ({
  children,
  className,
  onClick,
  disabled,
  variant = 'solid',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      data-cursor-size="80px"
      className={`${
        variant === 'solid'
          ? 'border-2 border-red-base bg-red-base px-5 text-white hover:border-red-base hover:bg-white hover:text-red-base'
          : 'border-2 border-red-base hover:bg-red-base hover:text-white'
      } px-3 py-2 font-montserrat text-xs uppercase duration-200 md:text-base lg:px-5 lg:text-xl ${
        className || ''
      }`}
      disabled={disabled ?? false}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
