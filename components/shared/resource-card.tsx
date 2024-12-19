import { calculateSale, cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { Title } from './title';
import { Button } from '../ui';
import { CameraOff, RussianRuble, SquareArrowOutUpRight } from 'lucide-react';

type Props = {
    id: number;
    name: string;
    description?: string;
    price: number;
    salePercent: number;
    imageUrl: string;
    className?: string;
}

export const ResourceCard: React.FC<Props> = ({
    id, name, description, price, salePercent, imageUrl, className
}) => {
    return (
        <div className={cn('', className)}>
            <Link href={`/resouce/${id}`}>
                <div className='flex justify-center items-center p-6 bg-secondary rounded-lg h-[260px]'>
                    {imageUrl 
                        ? <img className='w-[215px] h-[215px]' src={imageUrl} alt={name}/>
                        : <div className='flex flex-col justify-center items-center'>
                            <CameraOff size={48}/>
                            <p>No photo</p>
                        </div>
                    }
                    
                </div>

                <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

                <p className='text-sm text-gray-400'>{description}</p>

                <div className='flex justify-between items-center mt-4'>
                    <span className='flex flex-row items-center text-[20px]'>
                        {salePercent 
                            ? <div className='flex flex-row gap-2'>
                                <s><b>{price}</b></s>
                                <b className='text-primary'>{calculateSale(price, salePercent)}</b>
                            </div>

                            : <b>{price}</b>
                        }
                        <RussianRuble size={16} />
                    </span>
                    <Button variant={'secondary'} className='text-base font-bold'>
                        <SquareArrowOutUpRight size={20} className='mr-1' />
                        Read more
                    </Button>
                </div>
            </Link>
        </div>
    )
}