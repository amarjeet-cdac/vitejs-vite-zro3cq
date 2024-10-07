import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Cpu, Database, MessageSquare, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">C-DAC Patna</span>
          <svg
            className="h-8 w-8"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M8 13h2" />
            <path d="M8 17h2" />
            <path d="M14 13h2" />
            <path d="M14 17h2" />
          </svg>
          <span className="ml-2 text-xl font-bold">C-DAC Patna</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Research
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Facilities
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to C-DAC Patna
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  High Performance Computing Facility for Research and
                  Development in Artificial Intelligence, Big Data, and Chatbots
                </p>
              </div>
              <div className="space-x-4">
                <Button>Explore Our Facilities</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Focus Areas
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Cpu className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">
                  Artificial Intelligence
                </h3>
                <p className="text-muted-foreground">
                  Advancing AI research and applications for real-world
                  problems.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Database className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Big Data Analytics</h3>
                <p className="text-muted-foreground">
                  Harnessing the power of data for insights and innovation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Chatbot Development</h3>
                <p className="text-muted-foreground">
                  Creating intelligent conversational interfaces for various
                  domains.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  High Performance Computing Facility
                </h2>
                <p className="text-muted-foreground">
                  Our state-of-the-art HPC facility enables researchers and
                  developers to tackle complex computational challenges in AI,
                  Big Data, and more.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    <span>
                      Advanced GPU clusters for AI and Machine Learning
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    <span>
                      Big Data processing and analytics infrastructure
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    <span>
                      Specialized hardware for NLP and chatbot development
                    </span>
                  </li>
                </ul>
                <Button className="w-fit">Schedule a Tour</Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="High Performance Computing Facility"
                    className="absolute inset-0 object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2023 C-DAC Patna. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Accessibility
          </Link>
        </nav>
      </footer>
    </div>
  );
}
