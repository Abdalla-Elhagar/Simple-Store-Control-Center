import Cards from '../cards';
import data from '../data';

export default function Home() {
  return (
    <div>
      <div className="container flex justify-center gap-10 p-10 flex-wrap text-center">
        <Cards products={data} />
      </div>
    </div>
  );
}
