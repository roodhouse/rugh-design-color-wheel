const colors = [
    {
      id: "1",
      name: 'color 1',
      family: 'blue',
    },
    {
      id: "2",
      name: 'color 2',
      family: 'red',
    },
    {
      id: "3",
      name: 'color 3',
      family: 'white',
    },
    
  ];

  export function getColor(colorId) {
    return colors.find(({id}) => colorId === id); 
  }
  
  export function getColors() {
    return colors.map(({id, name, family}) => ({id, name, family}));
  }