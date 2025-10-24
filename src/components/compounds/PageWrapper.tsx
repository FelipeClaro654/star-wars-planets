const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full self-center md:w-2xl">{children}</div>
  );
};

export default PageWrapper;
