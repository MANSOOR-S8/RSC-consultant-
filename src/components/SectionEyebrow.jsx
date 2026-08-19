function SectionEyebrow({ code, label, tone = 'light' }) {
  const toneClasses =
    tone === 'dark'
      ? 'text-white/70 border-white/25'
      : 'text-navy-700/70 border-navy-900/15';

  return (
    <div className={`inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-wide-xl sm:tracking-wide-xl ${toneClasses}`}>
      <span className="flex items-center gap-3 whitespace-nowrap">
        <span className={`h-1.5 w-1.5 rounded-full ${tone === 'dark' ? 'bg-gold-400' : 'bg-gold-500'}`} />
        {code}
      </span>
      <span className="whitespace-nowrap opacity-70">/ {label}</span>
    </div>
  );
}

export default SectionEyebrow;

