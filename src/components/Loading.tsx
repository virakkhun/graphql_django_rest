const Loading = () => {
  return (
    <div className="w-full h-screen flex gap-2 justify-center items-center text-white">
      <div className="w-1/4 flex flex-col items-center justify-center gap-2 bg-black/50 border border-white/10 py-6">
        <p>Loading</p>
        <div className="animate-spin h-5 w-5 bg-transparent border-b-2 border-r-2 border-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
