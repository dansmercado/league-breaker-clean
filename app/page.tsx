import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-semibold">It builds! 🎉</h1>
      <Card
        title="Next.js + Tailwind + TS"
        subtitle="Drop your components into /components and pages into the /app router."
      >
        <p>
          You're seeing a Card component imported from{" "}
          <code>components/Card.tsx</code>.
        </p>
      </Card>
    </main>
  );
}
