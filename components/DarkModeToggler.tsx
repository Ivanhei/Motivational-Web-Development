import {
    SunIcon,
    MoonIcon,
} from '@/assets/Icons'

export default function DarkModeToggler({onChange, darkUI}) {


    return <div onClick={(e) => {

    }}>
        {darkUI ? <SunIcon/> : <MoonIcon/>}
    </div>
}
