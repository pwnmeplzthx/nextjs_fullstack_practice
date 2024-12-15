import { cn } from '@/lib/utils';
import React from 'react'
import { Container } from './container';

type Props = {
    className?: string;
}

const Header: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                
            </Container>
        </div>
    )
}

export default Header