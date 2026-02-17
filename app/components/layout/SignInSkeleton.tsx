const SignInSkeleton = () => {
  return (
    <div className="bg-card border border-(--border-color) p-12 shadow-[0_8px_24px_var(--shadow)]">
      <div className="text-center pb-8 mb-8 border-b border-(--border-color) flex flex-col items-center">
        <div className="w-30 h-30 rounded-[50%] mb-6 skeleton"></div>
        <div className="h-10 w-[40%] rounded-sm mb-2 skeleton"></div>
        <div className="h-4 w-[30%] rounded-sm mb-4 skeleton"></div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row py-4 px-0 border-b border-(--border-color) md:items-center">
          <div className="w-45 shrink-0">
            <div className="h-4 w-25 rounded-sm skeleton"></div>
          </div>
          <div className="w-full">
            <div className="w-5/12 h-4 rounded-sm skeleton"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row py-4 px-0 border-b border-(--border-color) md:items-center">
          <div className="w-45 shrink-0">
            <div className="h-4 w-25 rounded-sm skeleton"></div>
          </div>
          <div className="w-full">
            <div className="w-8/12 h-4 rounded-sm skeleton"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row py-4 px-0 border-b border-(--border-color) md:items-center">
          <div className="w-45 shrink-0">
            <div className="h-4 w-25 rounded-sm skeleton"></div>
          </div>
          <div className="w-full">
            <div className="w-1/5 h-4 rounded-sm skeleton"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row py-4 px-0 border-b border-(--border-color) md:items-center">
          <div className="w-45 shrink-0">
            <div className="h-4 w-25 rounded-sm skeleton"></div>
          </div>
          <div className="w-full">
            <div className="w-1/2 h-4 rounded-sm skeleton"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8 pt-8">
        <div className="h-12 md:flex-1 skeleton"></div>
        <div className="h-12 md:flex-1 skeleton"></div>
      </div>
    </div>
  );
};

export default SignInSkeleton;
