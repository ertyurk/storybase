type Props = {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen m-auto">
      <main className="flex-1 m-auto">{children}</main>
    </div>
  );
}

export default Layout