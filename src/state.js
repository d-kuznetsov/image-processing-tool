import { useReducer } from "react";

const SET_IMG_TO_VIEW = "SET_IMG_TO_VIEW";
const SET_IMAGES = "SET_IMAGES";
const SET_IS_LOADING = "SET_IS_LOADING";

const initialState = {
  images: null,
  imageToView: null,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_IMAGES:
      return { ...state, images: action.images };
    case SET_IMG_TO_VIEW:
      return { ...state, imageToView: getImageToView(state, action) };
    default:
      throw new Error();
  }
}

function getImageToView(state, action) {
  return (
    action.image && {
      ...state.images.find((image) => image.id === action.image.id),
      size: action.image.size,
    }
  );
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
