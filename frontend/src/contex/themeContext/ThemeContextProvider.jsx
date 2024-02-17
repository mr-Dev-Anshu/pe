import React from 'react' 
import ThemeContext from './ThemeContext';

 const ThemeContextProvider = ({children}) => {
        const [theme , setTheme ] = React.useState(false) ;
        
        return(
             <ThemeContext.Provider value={{theme , setTheme}}>
                {children}
             </ThemeContext.Provider>
        )
 }

 export default ThemeContextProvider ;