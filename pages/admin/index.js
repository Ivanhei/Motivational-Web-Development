import Link from "next/link";

export default function AdminHome() {
    return <ul>
        <li><Link href="problems_table"><a>Go to word list</a></Link></li>
        <li><Link href="two_way_reference"><a>Go to 2 way reference generator</a></Link></li>
    </ul>;
}
