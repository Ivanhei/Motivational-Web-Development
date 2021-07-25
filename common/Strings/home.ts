
interface HomeStrings {
    "nav_home": string,
    "nav_trophies": string,
    "user_change_avatar": string,
    "user_login": string,
    "user_logout": string,
}

const en: HomeStrings = {
    nav_home: "Home",
    nav_trophies: "Trophies",
    user_change_avatar: "Change Avatar",
    user_login: "Login",
    user_logout: "Logout",
}

const jp: HomeStrings = {
    nav_home: "ホーム",
    nav_trophies: "トロフィー",
    user_change_avatar: "プロフィール変更",
    user_login: "ログイン",
    user_logout: "ログアウト",
}

const homeStringsPack = { en, jp }

export { homeStringsPack, en, jp };
export type { HomeStrings };
