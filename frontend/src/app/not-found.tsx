export const metadata = {
  title: 'Page Not Found',
  description: "The page you're looking for is not available",
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img src="/logo.png" alt="Logo" className="w-20 h-16 md:w-24 md:h-20" />
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">404</h1>
          <p className="text-lg md:text-3xl text-gray-400 font-light leading-relaxed max-w-md mx-auto">
            The page that you're looking for is not available
          </p>
        </div>
      </div>
    </div>
  )
}
