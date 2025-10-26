import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const button = cva(
    'px-4 py-2 rounded-md font-medium transition-colors',
    {
        variants: {
            variant: {
                default: 'bg-blue-500 text-white hover:bg-blue-600',
                outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
            },
            size: {
                small: 'text-sm px-2 py-1',
                large: 'text-lg px-6 py-3',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'small',
        },
    }
);

export default function Button({ variant, size, className, children, ...props }) {
    return (
        <button className={twMerge(button({ variant, size }), className)} {...props}>
            {children}
        </button>
    );
}
