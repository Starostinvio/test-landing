import { ReactNode } from "react";
import "./style.css";

type PageLayoutProps = {
  children: ReactNode;
};
function PageLayout({ children }: PageLayoutProps) {
  return <div className="PageLayout">{children}</div>;
}

export default PageLayout;
