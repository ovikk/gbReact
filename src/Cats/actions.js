import { CAT_API_URL, setData, setError, setLoading } from "./catSlice";

export const getCatPhoto = () => async (dispatch, getState) => {
  const {
    cats: { data, loading, error },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      const responce = await fetch(CAT_API_URL);
      if (!responce.ok) {
        throw new Error("Something went wrong");
      }
      const result = await responce.json();

      dispatch(setData(result));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
};
