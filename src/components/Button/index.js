import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder5: "rounded-radius5" };
const variants = {
  FillGray5004c: "bg-gray_500_4c text-white_A700",
  OutlineBlack900: "border border-black_900 border-solid text-black_900",
};
const sizes = { sm: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder5"]),
  variant: PropTypes.oneOf(["FillGray5004c", "OutlineBlack900"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder5",
  variant: "FillGray5004c",
  size: "sm",
};

export { Button };
