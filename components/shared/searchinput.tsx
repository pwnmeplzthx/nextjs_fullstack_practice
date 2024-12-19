'use client'

import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Resource } from '@prisma/client';
import { CameraOff, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useClickAway, useDebounce } from 'react-use';

type Props = {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({className}) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [focused, setFocused] = React.useState(false);
    const [resources, setResources] = React.useState<Resource[]>([]);
    
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    });

    useDebounce(
        () => {
            Api.resources.search(searchQuery).then((data) => {
                setResources(data)
            })
        }, 
        500,
        [searchQuery]
    )

    const onClickItem = () => {
        setFocused(false);
        setSearchQuery('');
        // setResources([]);
    };

    return (
        <>
            {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />}
            <div ref = {ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
                <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400'/>
                <input 
                    className='rounded-2xl outline-none w-full bg-gray-100 pl-11'
                    type='text'
                    placeholder='Search resource...'
                    onFocus={() => {setFocused(true)}}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {resources.length > 0 && 
                    <div className={cn(
                        'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                        focused && 'visible opacity-100 top-12'
                    )} >
                        {resources?.map((resource: Resource) => {
                            return <Link 
                                href={`/resource/${resource.id}`}
                                key={resource.id}
                                onClick={onClickItem}
                            >
                                <div className='flex flex-row px-3 py-2 hover:bg-primary/10 gap-4 items-center'>
                                    {false
                                        ? <img className='rounded-sm' src='' width={32} height={32} alt='name' />
                                        : <CameraOff className='rounded-sm' size={32}/>
                                    }
                                    <span>{resource.name}</span>
                                </div>
                            </Link>
                        })}
                    </div>
                }
                
            </div>
        </>
    )
};
