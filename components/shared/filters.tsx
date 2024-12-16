import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('', className)}>
            <Title text='Filtering' size='sm' className='mb-5 font-bold'/>
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Some bool attr' value='1'/>
                <FilterCheckbox text='Second some bool attr' value='2'/>
            </div>
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Price range</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={30000} defaultValue={0}/>
                    <Input type='number' placeholder='30000' min={100} max={30000}/>
                </div>
            </div>
        </div>
    );
};