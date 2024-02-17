import React from 'react'
import SkillsContext from './SkillsContext'
export default function SkillsContextProvider({children}) {
    const skills = ["React" , "Core Java" , "Python" , "Java Script " , "HTML" , "CSS" , 'Tailwind CSS ' , 'Redux' , "Fire Base " , 'Mongo db ' , 'express' , 'Node js' , 'DSA' , 'Auth0' , 'Git & GitHub ' ];
  return (
    <SkillsContext.Provider value={{skills}} >
        {children}
    </SkillsContext.Provider>
  )
}

