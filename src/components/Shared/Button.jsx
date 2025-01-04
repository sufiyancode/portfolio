import React from "react";

const Button = ({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) => {
  const baseStyles = "px-6 py-3 rounded-full transition-colors";
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700",
    secondary: "border border-purple-600 hover:bg-purple-600/10",
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
