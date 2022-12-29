import "../styles/globals.scss";
import { Roboto } from "@next/font/google";
import Providers from "../store/Providers";

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
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
