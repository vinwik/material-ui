'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { unstable_capitalize as capitalize } from '@mui/utils';
import { useThemeProps } from "../styles/index.js";
import useSlot from "../utils/useSlot.js";
import styled from "../styles/styled.js";
import Person from "../internal/svg-icons/Person.js";
import { getAvatarUtilityClass } from "./avatarClasses.js";
import { AvatarGroupContext } from "../AvatarGroup/AvatarGroup.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = ownerState => {
  const {
    size,
    variant,
    color,
    src,
    srcSet
  } = ownerState;
  const slots = {
    root: ['root', variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    img: [(src || srcSet) && 'img'],
    fallback: ['fallback']
  };
  return composeClasses(slots, getAvatarUtilityClass, {});
};
const AvatarRoot = styled('div', {
  name: 'JoyAvatar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
  ...theme.typography[`title-${ownerState.size}`],
  ...(ownerState.size === 'sm' && {
    width: `var(--Avatar-size, 2rem)`,
    height: `var(--Avatar-size, 2rem)`,
    fontSize: `calc(var(--Avatar-size, 2rem) * 0.4375)` // default as 14px
  }),
  ...(ownerState.size === 'md' && {
    width: `var(--Avatar-size, 2.5rem)`,
    height: `var(--Avatar-size, 2.5rem)`,
    fontSize: `calc(var(--Avatar-size, 2.5rem) * 0.4)` // default as 16px
  }),
  ...(ownerState.size === 'lg' && {
    width: `var(--Avatar-size, 3rem)`,
    height: `var(--Avatar-size, 3rem)`,
    fontSize: `calc(var(--Avatar-size, 3rem) * 0.375)` // default as 18px
  }),
  marginInlineStart: 'var(--Avatar-marginInlineStart)',
  boxShadow: `var(--Avatar-ring)`,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  lineHeight: 1,
  overflow: 'hidden',
  borderRadius: 'var(--Avatar-radius, 50%)',
  userSelect: 'none',
  ...theme.variants[ownerState.variant]?.[ownerState.color]
}));
const AvatarImg = styled('img', {
  name: 'JoyAvatar',
  slot: 'Img',
  overridesResolver: (props, styles) => styles.img
})({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  // Handle non-square image.
  objectFit: 'cover',
  // Hide alt text.
  color: 'transparent',
  // Hide the image broken icon, only works on Chrome.
  textIndent: 10000
});
const AvatarFallback = styled(Person, {
  name: 'JoyAvatar',
  slot: 'Fallback',
  overridesResolver: (props, styles) => styles.fallback
})({
  width: '64%',
  height: '64%'
});
function useLoaded({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet
}) {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }
    setLoaded(false);
    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded('error');
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    if (src) {
      image.src = src;
    }
    if (srcSet) {
      image.srcset = srcSet;
    }
    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);
  return loaded;
}
/**
 *
 * Demos:
 *
 * - [Avatar](https://mui.com/joy-ui/react-avatar/)
 * - [Skeleton](https://mui.com/joy-ui/react-skeleton/)
 *
 * API:
 *
 * - [Avatar API](https://mui.com/joy-ui/api/avatar/)
 */
const Avatar = /*#__PURE__*/React.forwardRef(function Avatar(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyAvatar'
  });
  const groupContext = React.useContext(AvatarGroupContext);
  const {
    alt,
    color: colorProp = 'neutral',
    size: sizeProp = 'md',
    variant: variantProp = 'soft',
    src,
    srcSet,
    children: childrenProp,
    component,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const variant = inProps.variant || groupContext?.variant || variantProp;
  const color = inProps.color || groupContext?.color || colorProp;
  const size = inProps.size || groupContext?.size || sizeProp;
  let children = null;
  const ownerState = {
    ...props,
    color,
    size,
    variant,
    grouped: !!groupContext
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = useSlot('root', {
    ref,
    className: classes.root,
    elementType: AvatarRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotImg, imageProps] = useSlot('img', {
    additionalProps: {
      alt,
      src,
      srcSet
    },
    className: classes.img,
    elementType: AvatarImg,
    externalForwardedProps,
    ownerState
  });
  const [SlotFallback, fallbackProps] = useSlot('fallback', {
    className: classes.fallback,
    elementType: AvatarFallback,
    externalForwardedProps,
    ownerState
  });

  // Use a hook instead of onError on the img element to support server-side rendering.
  const loaded = useLoaded({
    ...imageProps,
    src,
    srcSet
  });
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== 'error';
  if (hasImgNotFailing) {
    children = /*#__PURE__*/_jsx(SlotImg, {
      ...imageProps
    });
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/_jsx(SlotFallback, {
      ...fallbackProps
    });
  }
  return /*#__PURE__*/_jsx(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? Avatar.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: PropTypes.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: PropTypes.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['lg', 'md', 'sm']), PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    fallback: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    img: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    fallback: PropTypes.elementType,
    img: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: PropTypes.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['outlined', 'plain', 'soft', 'solid']), PropTypes.string])
} : void 0;
export default Avatar;