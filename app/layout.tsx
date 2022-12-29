import "../styles/globals.scss";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html className={roboto.className}>
    <head />
    <body>{children}</body>
  </html>
);

export default RootLayout;
