import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ChefSync</h3>
            <p className="text-sm text-muted-foreground">
              Your personal kitchen companion for recipe management, meal planning, and shopping lists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/meal-plan"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Meal Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/shopping-list"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Shopping List
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} ChefSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}