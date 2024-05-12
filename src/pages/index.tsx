import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchListData, resetListStates, setCurrentPage } from '@/stores/list-slice';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import List from '@/components/List/List';
import { AsyncStatus } from '@/constants/common';
import Pagination from '@/components/Pagination/Pagination';
import { UnknownAction } from 'redux';
import { withLoadingAndErrorHandling } from '@/hoc/withLoadingAndErrorHandling';

const perPage = process.env.NEXT_PUBLIC_PER_PAGE ?? 1;

const Home = () => {
  const dispatch = useDispatch();
  const { listData, status, error, currentPage } = useSelector((state: RootState) => state.list);

  // Total page counter
  const totalPages = useMemo(() => {
    if (!listData || !listData.length || !perPage) return 1;
    return Math.ceil(listData.length / +perPage)
  }, [listData])

  // The data that will be rendered in the page
  const pageData = useMemo(() => {
    if (!perPage || !listData || !listData.length) return []
    return listData.slice((currentPage - 1) * +perPage, currentPage * +perPage)
  }, [currentPage, listData])

  // Data fetch
  useEffect(() => {
    dispatch(fetchListData() as unknown as UnknownAction);

    return () => {
      dispatch(resetListStates())
    }
  }, [dispatch]);

  // High order component to handle loading and errors
  const DetailPageWithLoadingAndErrorHandling = withLoadingAndErrorHandling(List);

  return (
    <div>
      <DetailPageWithLoadingAndErrorHandling data={pageData} status={status as AsyncStatus} error={error} />
      {!error &&
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={(val) => dispatch(setCurrentPage(val))} />
      }
    </div>
  );
};

export default Home;
