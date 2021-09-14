import { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import {getCatPhoto} from './actions'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },

  imageWrapper: {
    minWidth: "450px",
    minHeight: "800px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  catImg: {
    width: "100%",
    height: "100%",
  },
}));


const Cats = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.cats);

  const getThunkCatPhoto = useCallback(
    () => dispatch(getCatPhoto()),
    [dispatch]
  );

  useEffect(() => {
    getThunkCatPhoto();
  }, [getThunkCatPhoto]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        {loading && <CircularProgress />}
        {error && <div>Возникла ошибка</div>}

        {!loading && !error && data && (
          <img className={classes.catImg} src={data.url} alt="Cat" />
        )}
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={() => getThunkCatPhoto()}
      >
        Покажи Кота
      </Button>
    </div>
  );
};

export default Cats;
