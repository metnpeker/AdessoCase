export default (state, action) => {
    switch (action.type) {
      case "clearFilters":
        return {
          rotating: action.payload
        };
    case "setUnits":
        return {
          rotating: action.payload
        };
      default:
        return state;
    }
  };