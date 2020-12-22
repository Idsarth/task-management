import React, { ReactElement, useEffect, useState } from 'react'

// Import navigation
import { AppNavigator } from './navigation'

// Import context
import { ThemeContext } from './context'

// Import theme
import { LightTheme } from './styled'

// Import models
import { ITheme } from './models'

const MainComponent:React.FC = ():ReactElement => {
  const [theme, setTheme]  = useState<ITheme>(LightTheme)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: setTheme
      }}
    >
      <AppNavigator />
    </ThemeContext.Provider>
  )
}

export default MainComponent
