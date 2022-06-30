import NavBar from "./NavBar";
import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <SideNav/>
      <main>{children}</main>
    </>
  );
}
