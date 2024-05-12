import Card from '../Card/Card';
import { useRouter } from 'next/router';
import { PokemonList } from '@/types/common';

export interface IListProps {
  data: PokemonList[],
}

const List: React.FC<IListProps> = ({ data }) => {
  const router = useRouter()

  // To navigate detail of the pokemon
  const handleNavigateDetail = (name: string) => {
    router.push(`/detail/${name}`)
  }

  return (
    <div className='row'>
      {data?.map((item) => {
        return (
          <div key={item.name} className='col justify-content-center d-flex my-3'>
            <Card name={item.name} onClick={handleNavigateDetail} />
          </div>
        )
      })}
    </div>
  );
};

export default List;
