import notificationStyles from '@/styles/NotificationBanner.module.css'
import trophyStyles from '@/styles/Trophy.module.css'

import { TropyInterface } from "@/common/Tropies/Types";

import { TrophyIcon } from '@/assets/Icons'

export default function NotificationBanner({shown, message, tropy: {name, color}}: {shown: boolean, message: string, tropy: TropyInterface}) {
  console.log(notificationStyles[color]);
  return <div className={`
    ${notificationStyles.notificationBanner}
    ${trophyStyles[color]}
    ${shown ? notificationStyles.shown : ""}
  `}>
      <div className={notificationStyles.icon}><TrophyIcon/></div>
      <div className={notificationStyles.detail}>
        <div className={notificationStyles.message}>{message}</div>
        <div className={notificationStyles.name}>{name}</div>
      </div>
    </div>
}
