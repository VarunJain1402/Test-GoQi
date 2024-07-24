import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import SearchBox from '../components/SearchBox';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const API_URL = "https://api.unsplash.com/photos";
  const API_URL = "https://api.unsplash.com/search/photos"
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(`${API_URL}?page=1&client_id=${process.env.React_App_Access_Key}&query=${searchTerm?searchTerm:'mobile'}`);
      const data = await res.json();      
      setPosts(data.results);
      console.log(process.env.React_App_Access_Key)
    }
    catch(error) {
      console.log("Received error"+error.message);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[searchTerm])

  return (
    <div className=" h-screen grid place-items-center ">
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 ">
          {
            posts.map((post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
