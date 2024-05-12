import React from 'react';
import Spinner from '@/components/Spinner/Spinner';
import { AsyncStatus } from '@/constants/common';

// Loading hoc
const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
    function WithLoading({ status, ...props }: { status: AsyncStatus } & P) {
        if (status === AsyncStatus.Loading) {
            return <Spinner />;
        }
        return <Component {...props as P} />;
    };

// Error handling hoc
const withErrorHandling = <P extends object>(Component: React.ComponentType<P>) =>
    function WithErrorHandling({ error, ...props }: { error?: string } & P) {
        if (error) {
            return <div>Error: {error}</div>;
        }
        return <Component {...props as P} />;
    };

// Combined hoc
const withLoadingAndErrorHandling = <P extends object>(Component: React.ComponentType<P>) => {
    return (
        withErrorHandling(withLoading(Component))
    )
}
export { withLoading, withErrorHandling, withLoadingAndErrorHandling };
