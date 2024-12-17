'use client'

import React from 'react'
import { useIntersection } from 'react-use';

import { cn } from '@/lib/utils';
import { Title } from './title';
import { ResourceCard } from './resource-card';
import { useResourceTypeStore } from '@/store/resourceType';

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
    const setActiveResourceType = useResourceTypeStore((state) => state.setActiveId);

    const intersectionRef = React.useRef(null);
    // docs
    // https://streamich.github.io/react-use/?path=/story/sensors-useintersection--docs
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveResourceType(resourceTypeId)
        }
    }, [intersection?.isIntersecting, resourceTypeId, setActiveResourceType]);

    return (
        <div className={cn('', className)} id={`${resourceTypeId}`} ref={intersectionRef}>
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
                        salePercent={item.salePercent}
                    />
                })}
            </div>
        </div>
    )
}