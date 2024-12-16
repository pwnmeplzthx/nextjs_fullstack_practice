import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    className?: string;
}

const cats = ['Category_1', 'Category_2', 'Category_3', 'Category_4', 'Category_5'];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                cats.map((category, index) => {
                    return (
                        <a 
                            className={cn(
                                'flex items-center font-bold h-11 rounded-2xl px-5',
                                index === activeIndex && 'bg-white shadow-md shadow-gray-200 text-primary'
                            )} 
                            key={index}>
                            <button>{category}</button>
                        </a>)
                })
            }
        </div>
    )
}