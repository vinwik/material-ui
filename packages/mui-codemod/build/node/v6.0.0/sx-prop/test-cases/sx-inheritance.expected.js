"use strict";

var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(Layout, {
  ...layoutProps,
  ...slotProps.layout,
  slots: slots,
  slotProps: slotProps,
  sx: [...(Array.isArray(sx) ? sx : [sx]), ...(Array.isArray(slotProps?.layout?.sx) ? slotProps.layout.sx : [slotProps.layout.sx])],
  className: clsx(className, slotProps.layout.className),
  ref: ref
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(FormControl, {
  disabled: disabled,
  id: id,
  sx: [...(Array.isArray(formControlSx) ? formControlSx : [formControlSx])]
});