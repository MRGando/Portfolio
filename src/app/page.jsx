import Landing from "@/Components/Portfolio/Landing";

export const metadata = {
  title: "new title",
  description: "new desc",
};
export default function Home() {
  return (
    <main className="pt-[10em] z-[2]">
      <Landing />
    </main>
  );
}
