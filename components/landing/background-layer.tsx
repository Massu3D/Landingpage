export function BackgroundLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#fcfcf7]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(167,199,231,0.42),_transparent_28%),radial-gradient(circle_at_80%_18%,_rgba(96,165,250,0.18),_transparent_22%),radial-gradient(circle_at_50%_72%,_rgba(245,245,220,0.92),_transparent_36%),linear-gradient(180deg,_#ffffff_0%,_#fbfcfd_38%,_#f7f5ea_100%)]" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#d8ebfb]/70 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute right-[-6rem] top-[-2rem] h-80 w-80 rounded-full bg-[#dbeafe]/80 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
      <div className="absolute bottom-[-8rem] left-[8%] h-72 w-72 rounded-full bg-[#f6efda]/85 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
      <div className="absolute bottom-[12%] right-[10%] h-40 w-40 rounded-full border border-white/60 bg-white/35 blur-2xl sm:h-56 sm:w-56" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:96px_96px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      <div className="background-noise absolute inset-0 opacity-[0.045]" />
    </div>
  );
}
