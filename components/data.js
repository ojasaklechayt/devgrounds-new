import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Features and benefits of your product",
  desc: "DevGround is easily customizable and flexible to use. It is specially designed for developers to share their work and connect with other developers.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand for Devs",
      desc: "DevGround focuses on the developers to share their work and connect with other developers.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improved Productivity",
      desc: "DevGround helps developers to improve their productivity and to grow in their career.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Ready to use",
      desc: "Developers can join anytime and use DevGround for free.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "This helps Developers to use their application on mobile devices.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Innovation and Technology Trends",
      desc: "The main aim of DevGround is to provide the best service to the developers.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Specailly Designed for the developers to use it in the dark mode as well as light mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
