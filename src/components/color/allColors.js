class newColor {
    constructor(id, name, hex, LRV) {
      this.id = id;
      this.name = name;
      this.hex = hex;
      this.LRV = LRV;
    }
  
  }
  

  export const agreeableGray = new newColor('agreeable-gray','Agreeable Gray', '#322', 50)
  export const reposeGray = new newColor('repose-gray','Repose Gray', '#222', 60)
  
  export const allSchemes = [
    {
            id: agreeableGray.id,
            name: agreeableGray.name,
            hex: agreeableGray.hex,
            LRV: agreeableGray.LRV,
            comp: {
                colorOne: reposeGray
            }
    }
  ]
  
  

  export const allTheColors = [
    {
        id: agreeableGray.id,
    },
    {
        id: reposeGray.id

    }
  ]

  export function allColor(colorId) {
    return allSchemes.find(({id})=> colorId === id);
  }