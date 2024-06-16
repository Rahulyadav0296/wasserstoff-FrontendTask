function Container({ children }) {
  return (
    <main className="min-h-screen bg-black text-white overflow-auto flex-col items-center justify-start">
      <div className="container relative mx-auto px-4 py-8">{children}</div>
    </main>
  );
}

export default Container;
