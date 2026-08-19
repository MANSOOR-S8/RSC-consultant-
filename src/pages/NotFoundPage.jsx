import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function NotFoundPage() {
  return (
    <section className="relative flex min-h-[70svh] items-center justify-center bg-paper py-28">
      <div className="container-page text-center">
        <p className="font-mono text-sm uppercase tracking-wide-xl text-gold-500">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          This page has left the itinerary.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-navy-800/65">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          Back to Home
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
