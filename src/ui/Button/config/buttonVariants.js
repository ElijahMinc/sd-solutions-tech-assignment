import { cva } from 'class-variance-authority';

export const buttonVariants = cva('button', {
  variants: {
    variant: {
      default: 'default',
      destructive: 'destructive',
      outline: 'outline',
      secondary: 'secondary',
      ghost: 'ghost',
      link: 'link',
    },
    size: {
      default: 'size-default',
      sm: 'size-sm',
      lg: 'size-lg',
      icon: 'size-icon',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
