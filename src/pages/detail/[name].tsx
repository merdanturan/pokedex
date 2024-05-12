/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo } from 'react';
import DetailCard from '@/components/DetailCard/DetailCard';
import { AsyncStatus } from '@/constants/common';
import { withLoadingAndErrorHandling } from '@/hoc/withLoadingAndErrorHandling';
import { fetchDetailData, resetDetailStates } from '@/stores/detail-slice';
import { RootState } from '@/stores/store';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { UnknownAction } from 'redux';

let requestUrl = process.env.NEXT_PUBLIC_REQUEST_ENDPOINT ?? "https://pokeapi.co/api/v2/pokemon"

const DetailPage: React.FC = () => {
    const { detailData, status, error } = useSelector((state: RootState) => state.detail);
    const dispatch = useDispatch();
    const router = useRouter()

    // The data that will render in the DetailCard component
    const filteredDetailData = useMemo(() => {
        if (!detailData) return;
        const types = detailData.types.map((type) => type.type.name).join(', ')
        const moves = detailData.moves.map((move) => move.move.name).join(', ')
        return {
            ...detailData,
            types,
            moves
        }
    }, [detailData])

    // Data fetch
    useEffect(() => {
        const { name } = router.query
        if (!name || !requestUrl) return
        
        dispatch(fetchDetailData(`${requestUrl}/${name}`) as unknown as UnknownAction)

        return () => {
            dispatch(resetDetailStates())
        }
    }, [dispatch, router])

    // High order component to handle loading and errors
    const DetailPageWithLoadingAndErrorHandling = withLoadingAndErrorHandling(DetailCard);

    return (
        <>
            <DetailPageWithLoadingAndErrorHandling
                image={filteredDetailData?.sprites.front_default}
                name={filteredDetailData?.name}
                types={filteredDetailData?.types}
                moves={filteredDetailData?.moves}
                height={filteredDetailData?.height}
                weight={filteredDetailData?.weight}
                status={status as AsyncStatus}
                error={error} />
        </>
    );
};

export default DetailPage;
