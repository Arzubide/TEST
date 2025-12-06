import Link from "next/link";

export default function page() {
  return (
      <>
          <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="text-center space-y-6 max-w-2xl">
                  <h1 className="text-6xl font-extrabold text-blue-900 tracking-tight">
                      PokeApp
                  </h1>

                  <div className="pt-8">
                      <Link
                          href="/pokemon"
                          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                          API →
                      </Link>
                  </div>
              </div>
          </main>
      </>
  )
}
