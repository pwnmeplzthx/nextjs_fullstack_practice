import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { Title } from './title';
import { Button } from '../ui';
import { SquareArrowOutUpRight } from 'lucide-react';

type Props = {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ResourceCard: React.FC<Props> = ({
    id, name, description, price, imageUrl, className
}) => {
    return (
        <div className={cn('', className)}>
            <Link href='/resource/1'>
                <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
                    <img className='w-[215px] h-[215px]' src={imageUrl} alt={name}/>
                </div>

                <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

                <p className='text-sm text-gray-400'>{description}</p>

                <div className='flex justify-between items-center mt-4'>
                    <span className='text-[20px]'>
                        <b>{price}</b>
                    </span>
                    <Button variant={'secondary'} className='text-base font-bold'>
                        <SquareArrowOutUpRight size={20} className='mr-1' />
                        Go to
                    </Button>
                </div>
            </Link>
        </div>
    )
}