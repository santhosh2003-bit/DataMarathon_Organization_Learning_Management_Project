// SlimLayout Component
export function SlimLayout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="fixed inset-0">
        <img
          className="h-full w-full object-cover"
          src="/image-dm/background-auth.jpg" 
          alt="Background Image"
        />
      </div>
      <div className="relative z-10 flex flex-1 flex-col justify-center items-center px-4 py-10 overflow-auto">
        <main className="w-full max-w-md">
          {children}
        </main>
      </div>
    </div>
  );
}
