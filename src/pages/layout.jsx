import LoadingScreen from "@/components/Essential/LoadingScreen";

export default function RootLayout({ children }) {
  return (
    <div>
      <LoadingScreen />
      <main>{children}</main>
    </div>
  );
}
