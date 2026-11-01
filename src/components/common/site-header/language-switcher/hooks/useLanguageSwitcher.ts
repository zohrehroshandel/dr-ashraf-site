"use client";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES } from "../language-data";
import type { Locale } from "../types";
export function useLanguageSwitcher() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const pathname = usePathname();
	const router = useRouter();
	const currentLocale =
		SUPPORTED_LANGUAGES.find((lang) => lang.code === pathname.split("/")[1]) ??
		DEFAULT_LOCALE;

	const containerRef = useRef<HTMLDivElement | null>(null);

	const toggleOpen = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const close = useCallback(() => {
		setIsOpen(false);
	}, []);
	const selectLocale = useCallback(
		(code: Locale) => {
			setIsOpen(false);
			if (code === currentLocale.code) return;

			const [, , ...rest] = pathname.split("/");
			const nextPath = `/${code}${rest.length ? `/${rest.join("/")}` : ""}`;

			router.push(
				`${nextPath}${window.location.search}${window.location.hash}`,
			);
		},
		[currentLocale.code, pathname, router],
	);

	useEffect(() => {
		function handlePointerDown(event: PointerEvent) {
			const target = event.target;
			if (target instanceof Node && containerRef.current?.contains(target)) {
				return;
			}
			close();
		}

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				close();
			}
		}

		document.addEventListener("pointerdown", handlePointerDown);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [close]);
	return {
		isOpen,
		currentLocale,
		containerRef,
		toggleOpen,
		selectLocale,
	};
}
