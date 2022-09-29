

// const theme = createTheme({
//   palette:{
//     mode:"dark",
//     primary:{
//       main: "#7A297B",
//       light: "#f06292",
//       dark: "#f8bbd0",
//     },
//     seconday:{
//         main: "#7A297B",
//         light: "#f06292",
//         dark: "#f8bbd0",
//     },
//     error: {
//           main: "#e53935"
//         },
//     success: {
//         main: "#81c784"
//     },   
//     text:{
//         primary: "#D0CDD2",
//         secondary: "#807D84",
//     },
//     background:{
//         main: "#999",
//         light:"#ECECEC",
//         dark:"#19141B"
//     },
//     // action:{
//     //   hover:{
//     //     main: pink[300],
//     //   },
//     //   focus:{
//     //     main: pink[300],
//     //   },

//     },
// //   },
// //   shadows:[
// //     // 0:"",
// //   ],
//   typography:{
//     h1:{
//       fontFamily:"",
//       fontWeight: 10,
//       fontSize:"",
//     },
//     h2:{
//       fontFamily:"",
//       fontWeight: 10,
//       fontSize:"",
//     },
//     h5:{
//       fontFamily:"",
//       fontWeight: 10,
//       fontSize:"",
//     }
//   }

// })

// export default theme;


const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: "#7A297B",
          light: "#f06292",
        },
        seconday: {
          main: "#7A297B",
          light: "#f06292",
        },
        error: {
          main: "#e53935"
        },
        success: {
          main: "#81c784"
        },
        text: {
          primary: "#D0CDD2",
          secondary: "#807D84",
        },
        background: {
          main: "#999",
          light: "#ECECEC",
        }}
        : {
        // palette values for dark mode
        primary: {
          main: "#7A297B",
        dark: "#f8bbd0",
        },
        seconday: {
          main: "#7A297B",
        dark: "#f8bbd0",
        },
        error: {
          main: "#e53935"
        },
        success: {
          main: "#81c784"
        },
        text: {
          primary: "#D0CDD2",
          secondary: "#807D84",
        },
        background: {
          main: "#999",
          dark: "#19141B"
        },
      }),
  },
});


export default getDesignTokens;

