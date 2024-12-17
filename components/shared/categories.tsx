'use client'

import { cn } from '@/lib/utils';
import { useResourceTypeStore } from '@/store/resourceType';
import React from 'react'

type Props = {
    className?: string;
}

const resourceTypes = [
    {
        id: 1,
        name: 'Category 1',
    },
    {
        id: 2,
        name: 'Category 2',
    },
    {
        id: 3,
        name: 'Category 3',
    },
    {
        id: 4,
        name: 'Category 4',
    },
    {
        id: 5,
        name: 'Category 5'
    },
    
    
    
    
    
];

export const Categories: React.FC<Props> = ({className}) => {
    const resouceTypeActiveId = useResourceTypeStore((state) => state.activeId)

    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                resourceTypes.map((resourceType, index) => {
                    return (
                        <a 
                            className={cn(
                                'flex items-center font-bold h-11 rounded-2xl px-5',
                                resourceType.id === resouceTypeActiveId && 'bg-white shadow-md shadow-gray-200 text-primary'
                            )}
                            href={`/#${resourceType.id}`}
                            key={index}>
                            <button>{resourceType.name}</button>
                        </a>)
                })
            }
        </div>
    )
}