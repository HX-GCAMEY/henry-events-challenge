import Link from "next/link";
import {useRouter} from "next/router";
import Searchbar from "@/components/searchbar/searchbar";

import style from "./MainHeader.module.css";

function MainHeader() {
  const router = useRouter();
  function findEvents(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div className={style.container}>
      <Link className={style.link} href="/">
        All Events
      </Link>
      <Searchbar onSearch={findEvents} />
    </div>
  );
}

export default MainHeader;
