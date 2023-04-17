export const colors = [
  {
    id: "agreeable-gray",
    name: "agreeable gray",
    number: "SW 7045",
    family: "blue",
    hex: '#94766c',
    LRV: 40,
    comp: {
      colorOne: {
        name: "Halycon Green",
        hex: "#94766c",
        link: "halycon-green",
        isLight: false,
      },

      colorTwo: {
        name: "Repose",
        hex: "#d9a06a",
        link: "test",
      },

      colorThree: {
        name: "Mulberry Silk",
        hex: "#996c6e",
        link: "test",
      },

      colorFour: {
        name: "Calico",
        hex: "#627f7b",
        link: "test",
      },
    },
    mono: {
      colorOne: {
        name: "Acanthus",
        hex: "#efc488",
        link: "test",
      },

      colorTwo: {
        name: "Rembrandt Ruby",
        hex: "#974f49",
        link: "test",
      },

      colorThree: {
        name: "Roycroft Rose",
        hex: "#d9c3a6",
        link: "test",
      },

      colorFour: {
        name: "Rookwood Brown",
        hex: "#6e5241",
        link: "test",
      },
    },

    triad: {
      colorOne: {
        name: "Rookwood Antique Gold",
        hex: "#565c4a",
        link: "test",
      },

      colorTwo: {
        name: "Fairfax Brown",
        hex: "#d9a06a",
        link: "test",
      },

      colorThree: {
        name: "Dressy Rose",
        hex: "#c3b1ac",
        link: "test",
      },

      colorFour: {
        name: "Dutch Cocoa",
        hex: "#5a382d",
        link: "test",
      },
    },

    ana: {
      colorOne: {
        name: "Anonymous SW 7046",
        hex: "#806257",
        link: "test",
      },

      colorTwo: {
        name: "Lotus Flower SW 6310",
        hex: "#85594f",
        link: "test",
      },

      colorThree: {
        name: "Gray Shingle SW 7670",
        hex: "#dbc7bd",
        link: "test",
      },

      colorFour: {
        name: "Site White SW 7070",
        hex: "#9c6e63",
        link: "test",
      },
    },
  },

  {
    id: "halycon-green",
    name: "Halycon green",
    number: "SW 7045",
    family: "blue",
    hex: '#beac9f',
    comp: {
      colorOne: {
        name: "Halycon Green",
        hex: "#94766c",
        link: "halycon-green",
      },

      colorTwo: {
        name: "Repose",
        hex: "#d9a06a",
        link: "test",
      },

      colorThree: {
        name: "Mulberry Silk",
        hex: "#996c6e",
        link: "test",
      },

      colorFour: {
        name: "Calico",
        hex: "#627f7b",
        link: "test",
      },
    },
    mono: {
      colorOne: {
        name: "Acanthus",
        hex: "#efc488",
        link: "test",
      },

      colorTwo: {
        name: "Rembrandt Ruby",
        hex: "#974f49",
        link: "test",
      },

      colorThree: {
        name: "Roycroft Rose",
        hex: "#d9c3a6",
        link: "test",
      },

      colorFour: {
        name: "Rookwood Brown",
        hex: "#6e5241",
        link: "test",
      },
    },

    triad: {
      colorOne: {
        name: "Rookwood Antique Gold",
        hex: "#565c4a",
        link: "test",
      },

      colorTwo: {
        name: "Fairfax Brown",
        hex: "#d9a06a",
        link: "test",
      },

      colorThree: {
        name: "Dressy Rose",
        hex: "#c3b1ac",
        link: "test",
      },

      colorFour: {
        name: "Dutch Cocoa",
        hex: "#5a382d",
        link: "test",
      },
    },

    ana: {
      colorOne: {
        name: "Unfussy Beige",
        hex: "#806257",
        link: "test",
      },

      colorTwo: {
        name: "Canyon Clay",
        hex: "#85594f",
        link: "test",
      },

      colorThree: {
        name: "Abalone Shell",
        hex: "#dbc7bd",
        link: "test",
      },

      colorFour: {
        name: "Reddened Earth",
        hex: "#9c6e63",
        link: "test",
      },
    },
  },
  {
    id: "repose-green",
    name: "repose green",
    number: "SW 7045",
    family: "blue",
    hex: '#996c6e',
  },
];

  export function getColor(colorId) {
    return colors.find(({id}) => colorId === id); 
  }
  
  export function getColors() {
    return colors.map(({id, name, family, number}) => ({id, name, family, number}));
  }