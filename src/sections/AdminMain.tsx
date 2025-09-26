function AdminMain({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 p-8 overflow-auto">
      {children}
    </main>
  );
}

export default AdminMain;
