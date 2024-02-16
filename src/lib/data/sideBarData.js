import HandCoins from "../../assets/HandCoins.svg";
import BriefcaseDollar from "../../assets/briefcase-dollar.svg";
import BookOpen from "../../assets/BookOpen.svg";
import Handshake from "../../assets/Handshake.svg";
import Kanban from "../../assets/Kanban.svg";
import Swap from "../../assets/Swap.svg";
import Gear from "../../assets/Gear.svg";
import Feed from "../../assets/feed.svg";

export const NavigationItems = [
  {
    tab: "Earn",
    icon: HandCoins,
    tabUrl: "/dashboard/earn",
  },
  {
    tab: "Learn",
    icon: BookOpen,
    tabUrl: "/dashboard/learn",
  },
  {
    tab: "Social Feed",
    icon: Feed,
    tabUrl: "/dashboard/social-feed",
  },
  // {
  //   tab: "DAO Proposals",
  //   icon: Handshake,
  //   tabUrl: "/dashboard/dao-proposal",
  // },
  {
    tab: "Projects",
    icon: Kanban,
    tabUrl: "/dashboard/projects",
  },
  {
    tab: "Submissions",
    icon: Swap,
    tabUrl: "/dashboard/submissions",
  },

  {
    tab: "Settings",
    icon: Gear,
    tabUrl: "/dashboard/settings",
  },

];
