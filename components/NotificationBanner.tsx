import notificationStyles from '@/styles/NotificationBanner.module.css'

import { TropyInterface } from "@/common/Tropies/Types";

import { TrophyIcon } from '@/assets/Icons'

export default function NotificationBanner({shown, message, tropy: {name, color}}: {shown: boolean, message: string, tropy: TropyInterface}) {
  return <div className={`
    ${notificationStyles.notificationBanner}
    ${notificationStyles[color]}
    ${shown ? notificationStyles.shown : ""}
  `}>
      <div className={notificationStyles.icon}><TrophyIcon/></div>
      <div className={notificationStyles.detail}>
        <div className={notificationStyles.message}>{message}</div>
        <div className={notificationStyles.name}>{name}</div>
      </div>
    </div>
}
