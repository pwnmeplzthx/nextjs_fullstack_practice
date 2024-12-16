'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

interface Props {
    title: string;
    items: FilterChecboxProps[];
    defaultItems: FilterChecboxProps[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Search...',
    onChange,
    defaultValue,
    className,
}) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const list = showAll 
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) 
        : defaultItems.slice(0, limit);

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className={cn('', className)}>
            <p className='font-bold mb-3'>{title}</p>
            {
                showAll && (
                    <div className='mb-5'>
                        <Input 
                            placeholder={searchInputPlaceholder}
                            className='bg-gray-50 border-none'
                            onChange={onChangeSearchInput}
                        />
                    </div>
                )
            }
            

            <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
                {
                    list.map((item, index) => {
                        return (<FilterCheckbox 
                            onCheckedChange={(ids) => console.log(ids)}
                            checked={false}
                            key={index}
                            value={item.value}
                            text={item.text}
                            endAdornment={item.endAdornment}
                        />)
                    })
                }
            </div>

            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button 
                        className='text-primary mt-3'
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Hide' : '+ Show all'}
                    </button>
                </div>
            )}
        </div>
    );
};