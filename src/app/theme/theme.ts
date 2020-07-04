export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
        "--background-color": "#FFFFFF", // background color main
        "--background-sidebar-color": "#F5F5F5",
        "--background-main-color": "#FFFFFF",
        "--header-text-color": "#4d4d4d",
        "--cv-photo-color": "#424242",
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
      "--background-color": "#424242",
      "--background-sidebar-color": "#424242",
      "--background-main-color": "#424242",
      "--header-text-color": "#FFFFFF",
      "--cv-photo-color": "rgba(255, 255, 255, .2)",
    }
  };