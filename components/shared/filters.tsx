import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('', className)}>
            <Title text='Resource types' size='sm' className='mb-5 font-bold'/>

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Res type 1' value='1'/>
                <FilterCheckbox text='Res type 2' value='2'/>
            </div>

            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Price range</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
                    <Input type='number' placeholder='1000' min={100} max={1000}/>
                </div>
                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>

            <CheckboxFiltersGroup 
                title='Attributes filters'
                className='mt-5'
                limit={6}
                defaultItems={[
                    { text: 'Filter_1', value: '1' },
                    { text: 'Filter_2', value: '2' },
                    { text: 'Filter_3', value: '3' },
                    { text: 'Filter_4', value: '4' },
                    { text: 'Filter_5', value: '5' },
                    { text: 'Filter_6', value: '6' },
                ]}
                items={[
                    { text: 'Filter_1', value: '1' },
                    { text: 'Filter_2', value: '2' },
                    { text: 'Filter_3', value: '3' },
                    { text: 'Filter_4', value: '4' },
                    { text: 'Filter_5', value: '5' },
                    { text: 'Filter_6', value: '6' },
                    { text: 'Filter_7', value: '7' },
                    { text: 'Filter_8', value: '8' },
                ]}
            />
        </div>
    );
};