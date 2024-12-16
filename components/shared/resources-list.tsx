import React from 'react'
import { useIntersection } from 'react-use';

import { cn } from '@/lib/utils';
import { Title } from './title';
import { ResourceCard } from './resource-card';

type Props = {
    title: string;
    items: any;
    resourceTypeId: number;
    className?: string;
    listClassName?: string;
}

export const ResourcesList: React.FC<Props> = ({
    title,
    items,
    resourceTypeId,
    className,
    listClassName,
}) => {
    return (
        <div className={cn('', className)}>
            <Title text={title} size='lg' className='font-extrabold mb-5' />

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((item, index) => {
                    return <ResourceCard 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        price={item.price}
                    />
                })}
            </div>
        </div>
    )
}