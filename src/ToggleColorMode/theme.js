


const getDesignTokens = (mode) => ({
  breakpoints:{
    values:{
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1650
    }
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: "#0D0D0D",
          light: "#0D0D0D",
        },
        secondary: {
          main: "#ec407a",
          light: "#ec407a",
        },
        error: {
          main: "#e53935"
        },
        success: {
          main: "#81c784"
        },
        text: {
          primary: "#0D0D0D",
          secondary: "#0D0D0D",
        },
        info:{
          main:"#0D0D0D", //negro
          dark:"#0D0D0D"
        },
        background: {
          main: "#F8F8F8",
          light: "#F8F8F8",
        },
        action:{
          active: "#ec407a",
          hover: "#ec407a",
          focus: "#ec407a",
        }
    }
        : {
        // palette values for dark mode
        primary: {
          main: "#D0CDD2",  
          dark: "#D0CDD2",  //blanco
        },
        secondary: {
          main: "#f8bbd0",
          dark: "#f8bbd0",   //rosa
        },
        error: {
          main: "#e53935"   //rojo
        },
        success: {
          main: "#81c784"  //verde
        },
        text: {
          primary: "#D0CDD2",  //blanco
          secondary: "#807D84",  //gris
        },
        info:{
          main:"#E1E1E1",
          dark:"#E1E1E1"
        },
        background: {
          main: "#151012",
          dark: "#151012"
        },
        action:{
          active:"#f8bbd0",
          hover: "#f8bbd0",
          focus: "#f8bbd0"
        }
      }),
  },
    typography:{
        h1:{ 
          fontFamily: "Raleway",
          fontWeight: 600,
          fontSize: "5rem",
          lineHeight: "0.5"
        },
        h2:{
          fontFamily: "Raleway",
          fontWeight: 400,
          fontSize:"2rem",
        },
        h5:{
          fontFamily:"Raleway",
          fontWeight: 400,
          fontSize:"2rem",
        },
        h6:{
          fontFamily: "Raleway",
          fontWeight: 200,
          fontSize: "5rem",
        },
        subtitle1:{
          fontFamily: "Raleway",
          fontWeight: 200,
          fontSize: "5rem",
        },
        body1:{
          fontFamily: "Raleway",
          fontWeight: 200,
          fontSize:"1rem",
        }
      }
});


export default getDesignTokens;

