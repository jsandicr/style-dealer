import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
    className?: string;
};

export const Layout: React.FC<LayoutProps> = ({children, className}) => {
    return(
        <div className={`px-10 ${className}`}>
            {children}
        </div>
    )
}