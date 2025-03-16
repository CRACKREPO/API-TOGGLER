import {useContext} from 'react'
import {themeContext} from '../context/themeOrigin'

export const Toggler= () => {
    const {themeMode, darkTheme, lightTheme}=useContext(themeContext);
    const onClicked=(e) => {
        const darkVersion= e.currentTarget.checked;
        if(darkVersion) {
            darkTheme()
        } else {
            lightTheme();
        }
    }

    return(
        <label className='w-40 text-white text-sm h-16 bg-blue-500 rounded-md flex flex-col items-center justify-center'>
            <input value='' type='checkbox' checked={themeMode === 'dark'}
            onChange={onClicked} />
            <div>TOGGLE THE THEME</div>
        </label>
    )
}