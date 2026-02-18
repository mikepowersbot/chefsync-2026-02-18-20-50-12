import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const projectName = "ChefSync";
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Your Kitchen,{' '}
            <span className="text-primary">Simplified</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            ChefSync helps you organize recipes, plan meals, and create shopping lists 
            so you can spend less time planning and more time cooking delicious meals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/recipes"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">{projectName}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Project landing page.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}