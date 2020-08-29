import { useReducer } from "react";

const SET_IMG_TO_VIEW = "SET_IMG_TO_VIEW";
const SET_IMAGES = "SET_IMAGES";
const SET_IS_LOADING = "SET_IS_LOADING";

const initialState = {
  images: [],
  imageToView: null,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_IMAGES:
      return { ...state, imageToView: action.images };
    case SET_IMG_TO_VIEW:
      return { ...state, imageToView: action.image };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      throw new Error();
  }
}

export function useAppState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setImages = (images) => {
    dispatch({
      type: SET_IMAGES,
      images,
    });
  };
  const setImageToView = (image) => {
    dispatch({
      type: SET_IMG_TO_VIEW,
      image,
    });
  };
  const setIsLoading = (isLoading) => {
    dispatch({
      type: SET_IS_LOADING,
      isLoading,
    });
  };

  return {
    state,
    setImages,
    setImageToView,
    setIsLoading,
  };
}
