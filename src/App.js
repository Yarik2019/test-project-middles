
import './App.css';
import ListUsers from './components/ListUsers/ListUsers';
import { useGetUsersByNameQuery } from './sservices/users';
import Loading from './components/Loading/Loading';
function App() {
  const { data, error, isLoading } = useGetUsersByNameQuery('users');
  return (
    <div className="App">
    {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <Loading/>
    ) : data ? (
       <>
        <ListUsers data={data} className="list-users"/>
      </> 
     ) : null} 
  </div>
  );
}

export default App;
