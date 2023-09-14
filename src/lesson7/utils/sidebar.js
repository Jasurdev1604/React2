import { ReactComponent as home } from "../assets/icons/home.svg";
import styled from "styled-components";

const Icons = styled.div``;

Icons.Home = styled(home)`
  width: 16px;
  height: 16px;
`;

export const sidebar = [
  {
    id: 1,
    data: [
      {
        id: 1,
        title: "Home",
        Icon: Icons.Home,
      },
      {
        id: 2,
        title: "Explore",
        Icon: Icons.Home,
      },
      {
        id: 3,
        title: "Subscription",
        Icon: Icons.Home,
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        id: 1,
        title: "Library",
        Icon: Icons.Home,
      },
      {
        id: 2,
        title: "History",
        Icon: Icons.Home,
      },
      {
        id: 3,
        title: "Your Videos",
        Icon: Icons.Home,
      },
      {
        id: 4,
        title: "Watch later",
        Icon: Icons.Home,
      },
      {
        id: 5,
        title: "Liked videos",
        Icon: Icons.Home,
      },
      {
        id: 6,
        title: "More",
        Icon: Icons.Home,
      },
    ],
  },
  {
    id: 2,
    title: "Subscriptions",
    data: [
      {
        id: 1,
        title: "Jasirbek",
        Icon: Icons.Home,
      },
      {
        id: 2,
        title: "jasurbek",
        Icon: Icons.Home,
      },
      {
        id: 3,
        title: "jasurbek",
        Icon: Icons.Home,
      },
      {
        id: 4,
        title: "jasurbek",
        Icon: Icons.Home,
      },
      {
        id: 5,
        title: "jasurbek",
        Icon: Icons.Home,
      },
      {
        id: 6,
        title: "jasurbek",
        Icon: Icons.Home,
      },
      {
        id: 7,
        title: "jasurbek",
        Icon: Icons.Home,
      },
      {
        id: 8,
        title: "jasurbek",
        Icon: Icons.Home,
      },
    ],
  },
  {
    id: 4,
    title: "More from YouTube",
    data: [
      {
        id: 1,
        title: "Yoytube Premium",
        Icon: Icons.Home,
      },
      {
        id: 2,
        title: "Settings",
        Icon: Icons.Home,
      },
      {
        id: 3,
        title: "Help",
        Icon: Icons.Home,
      },
      {
        id: 4,
        title: "Report issue",
        Icon: Icons.Home,
      },
    ],
  },
];
