export interface State {
  photos: Array<object>;
  page: number;
}
export interface Action extends Partial<State> {
  type: "setPage" | "setPhotos";
}

const init: State = { photos: [], page: 0 };

function galleryReducer(state:State, action:Action) : State{
  switch (action.type) {
    case "setPage":    
      return {
        ...state,
        page: action.page as number,
      }
    case "setPhotos":
      return {
        ...state,
        photos: action.photos as Array<object>
      }
    default:
      throw new Error("Not allowed option");
  }
}

export { init, galleryReducer };
