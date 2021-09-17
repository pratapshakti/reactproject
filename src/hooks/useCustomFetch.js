import { useEffect, useState } from "react";

function useCustomFetch(url,intialData) {
  const [data, setData] = useState(intialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  async function customFetch(url) {
    try {
      const responce = await fetch(url);
      const jason = await responce.json();
      setData(jason); 
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }
  //we r going to make this call when url changes for that we use "useEffect" hook
  useEffect(() => {
    // for seeing "Loading" we r going to wait for some time for that use "setTimeout" function otherwise u know API call r very fast so we r not able to see "Loading"
    setLoading(true);
    setTimeout(() => {
      if (url) {
        customFetch(url);
      }
    }, 3000);
  }, [url]);
  return [data, error, loading];
}
export default useCustomFetch;
