import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
        <Link href="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}
