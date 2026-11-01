"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useSiteNavigationMenu() {
	const [openGroup, setOpenGroup] = useState<string | null>(null);
	const navRef = useRef<HTMLElement | null>(null);

	const closeMenu = useCallback(() => {
		setOpenGroup(null);
	}, []);

	const toggleGroup = useCallback((groupName: string) => {
		setOpenGroup((currentGroup) =>
			currentGroup === groupName ? null : groupName,
		);
	}, []);

	useEffect(() => {
		function handlePointerDown(event: PointerEvent) {
			const target = event.target;

			if (target instanceof Node && navRef.current?.contains(target)) {
				return;
			}

			closeMenu();
		}

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				closeMenu();
			}
		}

		document.addEventListener("pointerdown", handlePointerDown);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [closeMenu]);

	return { navRef, openGroup, toggleGroup, closeMenu };
}
