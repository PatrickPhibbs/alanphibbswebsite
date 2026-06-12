interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ${className}`}>
      {children}
    </div>
  );
}
