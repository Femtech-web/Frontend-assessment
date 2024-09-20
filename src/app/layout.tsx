import type { Metadata } from "next";
import { fonts } from "@/theme/fonts";
import { Provider as ChakraProvider } from "./chakra.provider";
import { ProtocolUploadProvider } from "@/context/protocol-upload.context";
import { ChatBtn } from "@/components/shared";

export const metadata: Metadata = {
  title: "Frontend Assessment",
  description: "Testing and assessing my skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.plus_jakarta_sans.variable}>
      <body>
        <ChakraProvider>
          <ProtocolUploadProvider>
            {children}
            <ChatBtn />
          </ProtocolUploadProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
