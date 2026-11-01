"use client";
import { useLanguageSwitcher } from "./hooks/useLanguageSwitcher";
import { SUPPORTED_LANGUAGES } from "./language-data";
import { languageSwitcherLabels } from "./language-switcher-content";
export function LanguageSwitcher() {
	const { isOpen, currentLocale, containerRef, toggleOpen, selectLocale } =
		useLanguageSwitcher();

	return (
		<div ref={containerRef} className="relative inline-block text-right">
			<button
				type="button"
				onClick={toggleOpen}
				aria-expanded={isOpen}
				aria-haspopup="listbox"
				aria-label={languageSwitcherLabels[currentLocale.code].switcher}
				className="flex items-center gap-2 rounded-xl border border-[#e9e0f2] bg-white px-3 py-1.5 text-xs font-semibold text-[#4b286b] transition hover:bg-[#f8f5fa] focus:outline-none focus:ring-2 focus:ring-[#70458f]/40 sm:text-sm"
			>
				<span className="text-base" aria-hidden="true">
					🌐
				</span>
				<span>{currentLocale.label}</span>
				<span
					aria-hidden="true"
					className={`text-[10px] transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
				>
					▼
				</span>
			</button>

			{isOpen && (
				<ul
					role="listbox"
					aria-label={languageSwitcherLabels[currentLocale.code].options}
					className="absolute left-0 top-full z-50 mt-1.5 min-w-32 overflow-hidden rounded-xl border border-[#e9e0f2] bg-white p-1 shadow-lg ring-1 ring-black/5"
				>
					{SUPPORTED_LANGUAGES.map((lang) => {
						const isSelected = lang.code === currentLocale.code;

						return (
							<li key={lang.code}>
								<button
									type="button"
									role="option"
									aria-selected={isSelected}
									onClick={() => selectLocale(lang.code)}
									className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs transition sm:text-sm ${
										isSelected
											? "bg-[#f3ecf8] font-bold text-[#4b286b]"
											: "text-[#554366] hover:bg-[#faf7fc]"
									}`}
								>
									<span>{lang.nativeName}</span>
									<span className="text-[11px] uppercase tracking-wider text-[#8b799e]">
										{lang.label}
									</span>
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

